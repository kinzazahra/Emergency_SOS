# 🚨 Emergency SOS Web App

A simple browser-based Emergency SOS application that allows users to send their location and contact an emergency number. A loud siren alerts nearby individuals, and the new Stop Siren button gives users control over the alarm.

## 🧰 Features

* 📍 Gets user’s geolocation.
* 📞 Prompts for an emergency contact number.
* 🔊 Plays a loud siren for alert.
* 🛑 Allows user to stop the siren.
* 📜 Stores SOS history.
* 🎨 Clean, mobile-responsive UI.

## 🚀 Getting Started

### Prerequisites

* Python 3.x
* pip (Python package manager)

### Installation

1. Clone or extract the project files.

2. Install dependencies:

pip install -r requirements.txt

3. Run the Flask app:

python app.py

4. Visit [http://localhost:5000](http://localhost:5000) in your browser.

## 📂 Project Structure

* app.py – Main Flask app.
* check.py – Utility functions.
* static/

  * js/script.js – Client-side logic including geolocation and siren control.
  * sounds/siren.mp3 – Siren audio file.
  * css/style.css – Custom styles.
* templates/

  * index.html – Main UI page.
  * history.html – SOS history log.
* saved\_data/sos\_records.txt – Stores submitted SOS logs.

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/afabfecd-4989-4420-bf7c-5d0f904fc751)


## 📜 License

This project is open-source. Modify and use freely for non-commercial purposes.

