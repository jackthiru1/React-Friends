# Birthday Tracker

Birthday Tracker is a simple web app that allows users to add, update, and delete their friends' names and birthdays. The app is built using React for the front end, Express and MongoDB for the back end, and MongoDB Atlas for database hosting.

## Live Demo

You can access the deployed web app at [your-deployed-web-address](your-deployed-web-address).

## Dependencies

- axios: For making HTTP requests from the front end to the back end
- express: For creating a simple server to handle API requests
- mongoose: For creating models and connecting to MongoDB
- MongoDB Atlas: For hosting the MongoDB database
- body-parser: For parsing request bodies in Express
- cors: For enabling Cross-Origin Resource Sharing (CORS) support

## Features

- Add a friend's name and birthday
- Update a friend's birthday
- Delete a friend's entry
- Display a list of friends and their birthdays
- Simple animations and transitions for a smoother user experience

## API Endpoints

- POST `/addfriend`: Add a new friend to the database
- GET `/read`: Get the list of friends from the database
- PUT `/update`: Update a friend's birthday in the database
- DELETE `/delete/:id`: Delete a friend's entry from the database

## Local Setup

1. Clone the repository
2. Install dependencies for both the front end and back end:
