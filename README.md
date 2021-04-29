<h1 align="center">
  PowerPoint Clicker
</h1>

# Requirements
* Python 3 (Recommended: Python 3.9)
* PIP

# Usage
## For the Presenter
* Go to https://hems5.de/Clicker
* Type in the 5 Digit Session ID and press Enter
* Click Next / Previous Slide

## For the Streamer
* Download and run the Python Script in /Client/
* Give your Presenters the Session ID
* Click into Powerpoint.

# Installation (For Streamer)
* Download the Script.py File from /Client/
* Install the Dependencies using `pip install pyautogui websockets asyncio`

# How it works
This Project was written in 30 Minutes. Don't expect anything fancy. When the Presentor clicks on one of the Buttons it will send a Request to the Python Script running on the Streamers PC to press the Arrows Left or Arrow Right button. For this to work you'll need to be active in the Presentation.

# Setup Video
[![PowerPoint Clicker - Installation & Usage](http://img.youtube.com/vi/ONi3Xi8RwzY/0.jpg)](http://www.youtube.com/watch?v=ONi3Xi8RwzY "PowerPoint Clicker - Installation & Usage")

# Screenshots

<h1 align="center">
  <img src="./assets/Client.png" width="600">
</h1>

<h1 align="center">
  <img src="./assets/phone.png" width="300">
</h1>

# Thanks to
* [Jojo599k](https://github.com/jojo599k/)