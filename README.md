# Project Title

`The Cooper Test Challenge`

Craft Academy - week 7 out of 12

May 2019

# Problem Statement

We have a client request to build a fitness tracking application. The idea is that the app will allow users to track their condition using a specific test called The Cooper Test.

The challenge is to build a software solution that will make it possible not to only make the calculation, but to record the data over time. Another requirement is that the app should have functionality that presents historical data of tests if a user has saved any historical data.

# History

The Cooper Test (aka The 12-minute run) was developed by Dr. Ken Cooper in 1968 as an easy way to measure aerobic fitness and provide an estimate of VO2 max for military personnel. The Cooper test, as it's also known, is still used today as a field test for determining aerobic fitness.

Dr. Cooper found that there is a very high correlation between the distance someone can run (or walk) in 12 minutes and their VO2 max value, which measures the efficiency with which someone can use oxygen while exercising. This test is still one of the basic fitness tests used by the military. It is also used by many coaches and trainers to determine cardiovascular fitness and track fitness over time. This simple test also allows you to compare your cardiovascular endurance with others of your age and gender.

# Getting Started

For the pusrposes of this project we built a backend API solution using Ruby on Rails and a frontend client solution using React. The repositories where the code is available are the following:
* **Leiter007** [API](https://github.com/leiter007/cooper_api), [Client](https://github.com/leiter007/cooper_client)
* **Raptorf1** [API](https://github.com/raptorf1/cooper_api), [Client](https://github.com/raptorf1/cooper_client)

# Deployment

* The API was deployed using Heroku. The link to access it is [here](https://cooper-felix-george.herokuapp.com/). Since this is only an API interface there are no views. So when you hit the link above do not expect to see something in your browser.
* The CLIENT was deployed via Netlify. You can visit it [here](https://cooper-felix-george.netlify.com/). This is where everything happens.

You can use the following credentials if you want to see the application in full action.
* email: *user@mail.com*
* password: *password*

Please be patient while the client loads. Since both services are hosted on free servers, the speed is not as instant as you might be used to.

# Prerequisites

You must have `Ruby`, `Ruby on Rails`, `Node.js`, `Bundler` and `PostgreSQL` installed in your system to be able to view this app and run all feature, unit and acceptance tests. After forking the repository run `bundle install` so that you download all the gems used in the project.

# Installing

* To fire up the rails API server, first you will have to create and migrate the databases. To do that, you run in your terminal `rails db:create` and `rails db:migrate`. For the server to activate, run `rails server` in your terminal.
* To fire up the react client, run `npm start` in your terminal.

# Running the tests

* The API was unit tested using Rspec. To run the tests in your terminal use `bundle exec rspec`.
* The client was tested using Cypress and Enzyme. To run the acceptance tests of Cypress use `npm run cy:open`. To run the react component Enzyme tests use `npm run test`.

# Built With

* [Ruby version 2.4.1](https://www.ruby-lang.org/en/)
* [Ruby on Rails version 5.2.0](https://rubyonrails.org/)
* [React](https://reactjs.org/)

# Tested With

* [Rspec - Behvavior Driven Development for Ruby](https://rspec.info/)
* [Cypress - a complete end-to-end testing experience](https://www.cypress.io/) 
* [Jest & Enzyme testing frameworks for React](https://www.npmjs.com/package/jest-enzyme)

# Authors

* **Leiter007** - [GitHub](https://github.com/leiter007) - [Portfolio](https://felix-react-portfolio.netlify.com/)
* **Raptorf1** - [GitHub](https://github.com/raptorf1) - [Portfolio](https://gtomaras-portfolio.netlify.com/)

# License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.

# Acknowledgments

* [PurpleBooth](https://github.com/PurpleBooth) for this README template.
* **[Zane](https://github.com/zanenkn)** and **[Carla](https://github.com/Carrosen)** for showing us how to complete the logout functionality.

# Screenshots

![Dashboard](https://user-images.githubusercontent.com/48205436/58003808-e33a7480-7ae1-11e9-8207-332acf5b2762.png)
![Bar_chart](https://user-images.githubusercontent.com/48205436/58003961-4af0bf80-7ae2-11e9-9467-41ad0d9f66d3.png)
![Line_chart](https://user-images.githubusercontent.com/48205436/58003990-5e9c2600-7ae2-11e9-8834-83541c951a37.png)
