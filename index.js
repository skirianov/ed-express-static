const express = require('express');

const PORT = 8080;

const app = express();
app.use(express.static('public'));
app.listen(PORT);
console.log("Running on port:" + PORT);