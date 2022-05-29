# ShopifyPlayStation

This was a CodeAcademy project called jammming.  I had to build a react app that connects to Spotify's API and allows a user to create a playlist.  I also changed a few things; such as: rendering in React18, changing the name, changing the design to be my own site, and privatizing my Spotify client id with nodenv.  

The site is not currently deployed as it runs on my node server.  If you would like to run it yourself you will need to copy the repository, paste it in a directory on your computer, and follow the directions listed below.

## Product Features

* My first React app!
* Demonstrates proper organization of components
* Incorporates JSX, JavaScript, HTML, and CSS
* Pulling data from an API and privatizing the key on the server 
* Fetching the API, then redirecting back to main site.
* Functional, yet simple, playlist generator for Spotify that allows you to push playlists to your personal account.

## Feature Requests

* Show existing playlists
* Update existing playlists
* Preview track samples before adding to playlist
* Adding album and playlist artwork

## Lisense
MIT



## Creating And Using Your Spotify Id

First you must already have or create a Spotify account.  https://www.spotify.com/get-spotify/overview/

Then you need to set up a developer site on https://developer.spotify.com/dashboard

Click on the **create an app** button.  Fill in the form and submit.

Copy your client id and navigate to **src/util/Spotify.js**
Paste the client id in the variable on line 4 so it looks like this
**const clientId =  "putyouridhereandleavethesemicolin";**

Back on your spotify for developers site you must click on the app you created, click the **edit settings** button.  Go down to redirect URIs and add the following link **http://localhost:3000**
**Make Sure You Press Save**

You will need to copy this link **http://localhost:3000** and paste it over the link in Spotify.js which can be found in **src/util, on line 6**

Assuming you have already created a directory where you pasted all the code for this app, followed the steps above, and... have npm installed... you should be able to open your command shell and type npm start.  Hit enter and the app will launch on your browser.



## Running The Project On NPM

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
