
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";


  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBHcaJuZ7ykZz7hZM2RAOefinu6__e7-yE",
    authDomain: "emergency-sos-web-app.firebaseapp.com",
    projectId: "emergency-sos-web-app",
    storageBucket: "emergency-sos-web-app.firebasestorage.app",
    messagingSenderId: "459272873212",
    appId: "1:459272873212:web:f3fe0a4cf0842aed94e379",
    measurementId: "G-9N1G8HT67Y"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>


//initialize firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



//submit button

const submit = document.getElementById('submit');
submit.addEventListener("click", function(event) {
  event.preventDefault()

  //inputs
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;


  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account...")
    window.location.href="index.html";

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

})


