<div align="center">

# CoLAB

</div>

<div align="center">
<img src="https://github.com/HarrisonStrand.png" width="200px" height="auto" >
</div>
<h3 align="center">CoLAB Capstone Project, 2-26-2021</h3>
<h4 align="center"> By Harrison Strand</h4>

## Description

This project is designed as a collaborative message board app for musicians. Users have the ability to create a profile with specific musical interests, gear, and workflow style and find other similar musicians to collaborate with based on their posts.

## User Stories

<details>
  <summary>Expand</summary>

| ID   | User Story                                                                                            | Accepted |
| ---- | ----------------------------------------------------------------------------------------------------- | -------- |
| US01 | "As a user, I want to be able to log in and view/edit my profile"                       | True     |
| US02 | "As a user, I want to be able to log in and view a feed of posts from other musicians"  | True     |
| US03 | "As a user, I want to be able to create a post in the home feed"  | True     |
| US04 | "As a user, I want to be able to add reactions to other musician posts"  | True     |
| US05 | "As a user, I want to be able to message other musicians after seeing their posts"  | True     |
| US06 | "As a user, I want to be able to click on a profile name to see that specific user's interests"  | True     |
| US07 | "As a user, I want to be able to upload photos to posts and as my profile picture"  | True     |
| US07 | "As a user, I want to be able to upload embedded audio files so that other user's can get an idea of what I'm creating"  | True     |

</details>

## Project Proposal
<hr/>

## Colab

### Project's Purpose or Goal: 

COLAB is designed to create an easier way to encourage isolated musicians and producers to collaborate through a seamless user-friendly app.

### MVP

User has the ability to create their personalized profile with musical interests, owned equipment, and workflow.
Information about musician profiles will be stored in a database in firestore

### Tools, frameworks, libraries, APIs, modules and/or other resources:

React - Front/User Interface Logic
NoSQL
Redux
Firebase Hosting

### Stretch Goals

Users have the ability to share finished projects through uploaded files and Soundcloud links
Users have the ability to share their splice profiles to collaborate
User has the ability to seek out similar musicians to collaborate with, based on profile information.

### Additional tools, frameworks, libraries, APIs, or other resources

Web Hosting
Identity/Admin abilities
Google login


## State Component Diagram

<img src="./src/img/TapRoomDiagram.png" width="500px" height="auto">

## Setup/Installation Requirements

##### Software Requirements

1. Internet browser
2. A code editor such as VSCode to view and edit the code

##### Open Locally

- Click on the link to my repository: [My Repository](https://github.com/HarrisonStrand/CoLAB)
- Click on the green "Code" button and copy the repository URL
- Open your terminal and use the command `git clone ` into the directory you would like to clone the repository
- Open in text editor to view code and make changes

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Required Scripts

In the project directory, run:

### `npm install`

Installs all dependancies for the project in order to run the application

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Available Scripts

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

<details>
  <summary>Expand</summary>

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

</details>


## Known Bugs

- EditUserProfile component does not Redirect to Profile page successfully
- User must Re-Enter all form attributes for firebase to store user information
- Once you edit your profile for the first time, you cannot go back to view your profile page without .map bug errors
- Having issues hosting the site live with firebase host

## Upcoming Edits

- Create functionality for viewing other user profiles through posts
- Ability to upload profile pictures and project links
- Embed audio files into posts

## Support and Contact Details

If any further errors or bugs occur with installation, please email me, <harrisonstrand@gmail.com>.

## Technologies Used

- VSCode
- Node
- React
- Redux
- CSS
- Firebase
- Firestore
- Materialize CSS
- Javascript
- npm package installer

### License

This software is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

Copyright (c) 2021 Harrison Strand<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Q_3EVY7j95tTyemJwWxMR7jwvUK7gPe0_w&usqp=CAU" width="2%" height="auto">







