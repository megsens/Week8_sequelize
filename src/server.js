// imports express
// imports port
// assigns express to "app"

// initializes express

const express = require("express");

const port = 80;

// initializes port 80

const app = express();

app.use(express.json());

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});