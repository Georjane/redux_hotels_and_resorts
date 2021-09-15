
# Redux - Hotels & Resorts 
## Project Description

This project is a Final capstone based on 

## Technical requirements of the project
1. The project is a single page application(SPA) built with React and Redux. 
2. The data that is retrieved from the API is stored in the Redux store
3. We filter the data that is retrieve from the API using a Filter stateless component
4. Every page, the main page and pages for each item, has a unique route within the SPA
5. The project is deployed and accessible online

## Project Structure
– The App page is a container with React Router. It gets app state from Redux Store. Then the navbar now can display based on the state.

– Login & Register pages have form for data submission (with support of react-validation library). They dispatch auth actions (login/register) to Redux Thunk Middleware which uses auth.service to call API.

– auth.service methods use axios to make HTTP requests.

– Home page is public for all users.

– Hotels page displays hotel & resorts information after the login action is successful.

## Redux - Hotels & Resorts Screenshot
![Redux - Hotels & Resorts]()


## Live Link on Heroku
- [Redux - Hotels & Resorts]()

## RESTful ROR API Repo Link
- [RESTful ROR API Repo Link]()

## Tools used
- React
- react-redux
- redux 
- redux-thunk 
- react-router-dom 
- axios 
- react-validation 
- Bootstrap 
- validator 

## Getting Started
To get a local copy of the repository please run the following commands on your terminal:
```
$ git clone https://github.com/Georjane/redux_hotels_and_resorts.git
$ cd redux_hotels_and_resorts
$ npm start
$ Open localhost:3000 in your browser if it doesn't open automatically
```

## Run Tests
```
$ npm test
```
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Author

### 1. Witah Georjane
* Github: [@Georjane](https://github.com/Georjane)
* Twitter: [@WittyJany](https://twitter.com/WittyJany)
* LinkedIn: [Witah Georjane](https://www.linkedin.com/in/witah-georjane)

## Contributing
There are two ways of contributing to this project:

1. If you see something wrong or not working, please open the issue in issue section
2. If you see something to improve or to correct, and you have a solution to that, follow the below steps to contribute:
    1. Fork this repository
    2. Clone it on your local computer by running `git clone https://github.com/Georjane/redux_hotels_and_resorts.git` __Replace *your username* with the username you use on github__
    3. Open the cloned repository which appears as a folder on your local computer with your favorite code editor
    4. Create a separate branch off the *master branch*,
    5. Write your codes which fix the issue you found
    6. Commit and push the branch you created
    7. Open a pull request, comparing your new created branch with our original master branch [here](https://github.com/Georjane/redux_hotels_and_resorts/pulls)

## Show your support

Give a ⭐️ if you like this project!

## Design Inspiration
- Design idea by []()
- All design inspiration info can be found [here]()

## Acknowledgment
* [Microverse](https://www.microvese.org)
