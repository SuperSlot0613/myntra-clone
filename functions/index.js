const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API ROUTES
app.get("/", (request, response) => response.status(200).send("hello world"));

//Listen Command
exports.api = functions.https.onRequest(app);

//firebase init >> to go cloud function
//npm i express
//npm i cors
//npm i stripe
//firebase emulators:start
//After taking the test of system
//'firebase deploy --only function' this is deploy the backend
//After firebase init
//For deployment of frontend run the 'firebase deploy --only hosting'
