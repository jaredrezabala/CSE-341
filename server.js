const express = require('express');
const app = express();
/* ******************************************
 * Server host name and port
 * ***************************************** */
const HOST = 'localhost'
const PORT = 3000
/* ***********************
* Log statement to confirm server operation
* *********************** */
app.listen(PORT, () => {
    console.log(`App listening on ${HOST}:${PORT}`)
    })
/* ******************************************
 * Default GET route
 * ***************************************** */
app.get("/", (req, res) => {res.send("Welcome home!")})