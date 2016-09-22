const express = require("express");
const {json} = require("body-parser");
const app = express();
const port = 4000;

const middleware = require('./controllers/middleware.js');
const mainCtrl = require('./controllers/mainCtrl.js');
const routes = require('./controllers/routes.js');

app.use(json());
app.use(middleware.addHeaders);

// const middleware = require("./controllers/users/middleware")
routes(app);

app.listen(port, () => console.log(`Listening on ${port}`));
