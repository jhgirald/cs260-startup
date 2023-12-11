const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const DB = require('./database.js');

// Third party middleware - Cookies
app.use(cookieParser());
// app.use(express.json());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.post('/user/create/:username/:password', async (req, res) => {
  const user = await DB.getUser(req.params.username);
  if (user.length > 0){
    res.status(401).send({ error: 'Username already taken' });
  }
  else if (req.params.password.length < 8){
    res.status(401).send({ error: 'password too short' });
  }
  else {
    const newUser = { username:req.params.username, password:req.params.password };
    await DB.addUser(JSON.stringify(newUser));
    res.status(200).send({});
  }

});
// The service port defaults to 3000 or is read from the program arguments
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// Text to display for the service name
const serviceName = process.argv.length > 3 ? process.argv[3] : 'website';

// Serve up the static content
app.use(express.static('public'));

// Provide the version of the application
app.get('/config', (_req, res) => {
  res.send({ version: '20221228.075705.1', name: serviceName });
});

// Return the homepage if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.get('/user/login/:username/:password', async (req, res) => {
  const { username, password } = req.params;

  const user = await DB.getUser(username);

  if (user && user.password === password) {
    // Passwords match, generate a token
    const token = "Auth"
    res.send({ token: token });
  } else {
    // Incorrect username or password
    res.status(401).send({ error: 'Invalid username or password' });
  }
});

app.get('/user/recipe/:recipes/:username/:auth', (req, res) => {
  res.send({ recipes: ''});
});

app.get('/user/group/:groups/:username/:auth', (req, res) => {
  res.send({ groups: ''});
});

app.get('/user/chats/:chats/:username/:auth', (req, res) => {
  res.send({ chats: ''});
});

app.get('/user/notifications/:notifications/:username/:auth', (req, res) => {
  res.send({ notifications: ''});
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});