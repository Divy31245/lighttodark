const express = require("express");
const fs = require("fs");
const app = express();
const port = 8080;


app.use(express.static('static'));

app.get('/', (req, res) => {
    sendFile("D:/js projects/L to D theme swap/static/index.html");
})

app.listen(port, () => {
    console.log(`App is running on ${port}`);
})