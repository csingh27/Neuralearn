# INSTALLATION  
* Node JS  
- curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -  
- sudo apt-get install -y nodejs  
* Firebase  
- Create new project "Neuralearn"  
- Select Web Icon
- npm install firebase
- Go to Settings > Project Settings > SDK Setup and Configuration > Config & copy the config
- cd neuralearn/src 
- rm App.test.js logo.svg setupTests.js
- npm install @material-ui/core
- npm install @material-ui/icons
- npm install --save material-ui-icons
- npm install react-router-dom
- npm install -g firebase-tools
- npm install d3 --save .

# DATASET
- Move CSV files to /home/chandandeep/Neuralearn/neuralearn/public (where index.html exists)

# RUN
- cd neuralearn
- npm start
 
