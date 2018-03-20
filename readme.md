# MYSQL and Handlebars page
## Adam specker GWU bootcamp march 2018
## Practice using mysql and express

### Setup and File Structure
* GOAL: to create a simple functional webpage ordered in the MVC model
* Dependancies: mysql, body-parser, express, express-handlebars
* Data
    * Mysql and corresponding npm package for database connections
    * ORM functions to query the database

* Models 
    * calls the orm functions with a callback and parameters to query database from controller

* Controller
    * makes the get, post and put requests to the api using the ORM methods passed through the model
    * establishes the routes that are then sent to the server

* Views
    * HTML templates to be served to client
    * main is the boilerplate html
    * index is the page content
    * partials contain the dynamic elements for eaten and uneaten burgers

* Server 
    * takes the exported routes from the controller
    * uses express to handle those routes
    * body parser as middleware to process the response json
