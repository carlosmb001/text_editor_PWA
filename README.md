  <img style="display: block; margin-left: auto; margin-right: auto;" src="assets/JATE_logo.png">
  
# Progressive Web Application (PWA): Text Editor
## 🌟 Description
Step into the future of web apps with this robust Text Editor crafted to meet the standards of Progressive Web Applications (PWA). With an emphasis on offline reliability and efficient data storage, this editor ensures that your notes and code snippets are securely saved and easily accessible. This application makes use of cutting-edge technologies such as the idb package for data management and features a streamlined deployment process for Heroku.
## 📜 User Story
```
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```
## Acceptance Criteria
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN my JavaScript files should be bundled using webpack
WHEN I run my webpack plugins
THEN I should see a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN the text editor should still function in the browser without errors
WHEN I open the text editor
THEN IndexedDB should immediately create a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN the content in the text editor should be saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN the content in the text editor should be retrieved from our IndexedDB
WHEN I click on the Install button
THEN I should download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application

## 🚀 Installation
Clone this GitHub repository.
Install required npm packages using: npm install.
Run the server: npm run start.

## ▶️ Usage
Launch the application.
Begin creating notes or code snippets.
Experience the reliability of data storage and offline capabilities.

## 💻 Technologies Used
[Node.js](https://nodejs.org/en)
[Express.js](https://expressjs.com/)
[IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
[idb package](https://www.npmjs.com/package/idb)
[Webpack](https://webpack.js.org/)
[Workbox](https://developers.google.com/web/tools/workbox)

## 🌍 Deployment
<a href="https://text-editor-pwa-cmb-953d51a916c2.herokuapp.com"><img src="assets/JATE.png" alt="Website Preview"></a>

## 📄 License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project uses the MIT license.

## 👏 Acknowledgements
edX Boot Camps LLC for the project prompt and resources.
