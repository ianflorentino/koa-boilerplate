# Koa Boilerplate 

### Requirements
- node (https://nodejs.org/en/)
- nodemon (https://github.com/remy/nodemon)
- npm (https://github.com/npm/npm)
- mongodb (https://www.mongodb.org/downloads#production)

### Getting Started
Run `npm install` to install all dependencies

Run `npm start` to start the server

### File Structure
`controllers` - where the middleware magic is defined

`lib` - will be used for services

`models` - all schema and model definitions will be seperated by file name eg (User, Book, etc)

`node_modules` - all your dependency libraries

`responses` - where all the error handling responses are defined

`app.js` - server and db initialization

`routes.js` - defining all the routes and what controllers to point to
