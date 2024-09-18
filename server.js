const express = require('express');
require('dotenv').config();
const app = express();
/* ***********************
* Log statement to confirm server operation
* *********************** */
app.listen(process.env.PORT, () => {
    console.log(`App listening on http://${process.env.HOST}:${process.env.PORT}`)
    })
/* ******************************************
 * Default GET route
 * ***************************************** */
app.get("/", (req, res) => {res.send("Welcome home!")})