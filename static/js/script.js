const sosBtn = document.getElementById("sos-btn");
const statusMsg = document.getElementById("status-msg");

// Load siren sound
const siren = new Audio('/static/sounds/siren.mp3');

sosBtn.addEventListener("click", () => {
  const emergencyContact = prompt("📞 Enter your Emergency Contact Number:");

  if (!emergencyContact) {
    statusMsg.textContent = "❌ SOS cancelled. Emergency contact is required.";
    return;
  }

  statusMsg.textContent = "📍 Locating...";

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Play siren sound
        siren.play();

        statusMsg.innerHTML = `
          🚨 SOS Sent! <br>
          📍 Latitude: ${latitude.toFixed(4)} <br>
          📍 Longitude: ${longitude.toFixed(4)} <br>
          📞 Emergency Contact: ${emergencyContact}
        `;

        // Send data to Flask backend
        fetch('/send_sos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            latitude: latitude,
            longitude: longitude,
            emergency_contact: emergencyContact
          })
        })
        .then(response => response.json())
        .then(data => {
          console.log(data.message);
        })
        .catch(error => {
          console.error('Error sending SOS:', error);
        });
      },
      () => {
        statusMsg.textContent = "❌ Failed to get location. Please allow location access.";
      }
    );
  } else {
    statusMsg.textContent = "❌ Geolocation not supported by your browser.";
  }
});

// Add Stop Siren Button functionality
const stopBtn = document.getElementById("stop-btn");

if (stopBtn) {
  stopBtn.addEventListener("click", () => {
    siren.pause();
    siren.currentTime = 0; // reset to start
    statusMsg.textContent = "🛑 Siren stopped.";
  });
}
