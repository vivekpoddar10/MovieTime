# setup

- npm init
- npm i -D parcel
- npm i react
- npm i react-dom
- npm i react-router-dom

- set the tailwind css

- set the jest

  - npm i -d @testing-library/react
  - npm i -D @testing-library/jest-dom
  - npm i -d jest
  - npx jest --init
  - npm i -d jest-environment-jest
  - npm install -d babel-jest @babel/core @babel/preset-env

- set firebase for authentication

  - npm install firebase
  - npm install -g firebase-tools
  - npx firebase login
  - npx firebase init
  - build the project
  - npx firebase deploy

- build redux store to store the login infor

  - npm i @reduxjs/toolkit
  - npm i react-redux

- useNavigate hook for navigating

# feature

- login/sign up
  - form
  - redirect to browse
- Browse (after authentication)
  - Header
  - Main movie
    - Trailer in the background
    - title, description, play btn
    - movie suggestion
    - movie list
- netflix gpt
  - search bar
  - movie suggestion

# tech stack

- frontend: react, tailwindCSS
- backend: firebase
- api:
