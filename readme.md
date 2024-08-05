Permalist is a to-do list application that allows users to organize tasks into different lists. Built with Express, EJS, and PostgreSQL, this project demonstrates how to create a full-stack application with CRUD functionalities. Users can create new lists, add items, edit existing items, and delete them.

## Features

- **Create Lists:** Users can create multiple lists to organize their tasks.
- **Add Items:** Add tasks to any of the created lists.
- **Edit Items:** Modify the title of existing tasks.
- **Delete Items:** Remove tasks from a list.
- **Dynamic Frontend:** Use EJS templates to render dynamic HTML content.

## Project Setup and Overview

### 1. Setting up the Project

- **Dependencies:** 
  - **Express:** Web framework for Node.js.
  - **EJS:** Templating engine for rendering HTML.
  - **Body-Parser:** Middleware for handling form data.
  - **PostgreSQL:** Database for storing tasks and lists.

- **package.json:** Manages project dependencies and scripts.

  ```json
  {
    "name": "permalist",
    "version": "1.0.0",
    "description": "A to-do list application with multiple lists.",
    "main": "app.js",
    "scripts": {
      "start": "node app.js"
    },
    "dependencies": {
      "body-parser": "^1.19.0",
      "ejs": "^3.1.8",
      "express": "^4.17.1",
      "pg": "^8.7.1"
    }
  }

Use the following to install libraries 
npm i
npm i nodemon

2. Database Setup
Database: Create a PostgreSQL database called permalist.
Use the queries.sql to run the queries

Run the project 
npm start
or 
nodemon index.js

Made By Nishant Achaekar

