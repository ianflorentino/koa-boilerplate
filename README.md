# Koa Boilerplate 

### Requirements
- node (https://nodejs.org/en/)
- nodemon (https://github.com/remy/nodemon)
- npm (https://github.com/npm/npm)
- mongodb (https://www.mongodb.org/downloads#production)

### WHY KOA?
Because [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) and synchronous calls in JavaScript make our lives easier.

### Getting Started
Run `npm install` to install all dependencies

Run `npm start` to start the server

### File Structure

`src/controllers` - where the middleware magic is defined

`src/lib` - will be used for services

`src/models` - all schema and model definitions will be seperated by file name eg (User, Book, etc)

`src/responses` - where all the error handling responses are defined

`src/config/app.js` - server and db initialization

`src/config/routes.js` - defining all the routes and what controllers to point to
