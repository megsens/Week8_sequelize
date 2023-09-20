// imports express
// imports port
// assigns express to "app"

// initializes express

const express = require("express");

const port = 80;

// initializes port 80 = default port

const app = express();

app.use(express.json());

// "app" = loaded express into APP, to access the ".GET" method (or "GET Request"), the ".GET" method corresponds to a HTTP Verb

// "/health" = connects to the health URL to which the request will be going to i.e: http://localhost/health

// req = request, res = response

// "res.status(200)" = send this message to client, Thunder Client will receive this message

app.get("/health", (req, res) => {
    res.status(200).json({ message: "API is healthy"});
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});