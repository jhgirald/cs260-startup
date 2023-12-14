const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const DB = require('./database.js');

// Third party middleware - Cookies
app.use(cookieParser());
app.use(express.json());

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
app.post('/user/login', async (req, res) => {
  const body = req.body;
  const user = await DB.getUser(req.body.username);

  if (user[0].password === req.body.password) {
    // Passwords match, generate a token
    const token = "Auth"
    res.send({ token: token });
  }
  else {
    res.status(401).send({ error: 'Invalid username or password' });
  }
});

app.post('/user/recipe', async (req, res) => {
  const body = req.body;
  const newRecipe = { username:req.body.username, name:req.body.name, ingredients:req.body.ingredients, instructions:req.body.instructions };
  await DB.addRecipe(JSON.stringify(newRecipe));
  res.send({ok:"ok"});
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



// app.post('/user/login/:username/:password', async (req, res) => {
//   // const { username, password } = req.params;
//   // console.log(username);
//   const user = await DB.getUser(req.params.username);

  // if (user[0].password === req.params.password) {
  //   // Passwords match, generate a token
  //   const token = "Auth"
  //   res.send({ token: token });
  // } else {
//     // Incorrect username or password
  //   res.status(401).send({ error: 'Invalid username or password' });
  // }
// });

app.get('/user/recipe/:username', async (req, res) => {
  const userRecipes = await DB.getRecipesByUser(req.params.username);
  res.send({ recipes: userRecipes});
});
app.get('/user/recipe/', async (req, res) => {
  const recipes = await DB.getRecipes();
  res.send({ recipes: recipes});
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
// Return the homepage if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});
server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



const { WebSocketServer } = require('ws');
// const express = require('express');
// const app = express();

// Serve up our webSocket client HTML
// app.use(express.static('./public'));

// const port = process.argv.length > 2 ? process.argv[2] : 3000;
// server = app.listen(port, () => {
//   console.log(`Listening on ${port}`);
// });

// Create a websocket object
const wss = new WebSocketServer({ noServer: true });

// Handle the protocol upgrade from HTTP to WebSocket
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request);
  });
});

// Keep track of all the connections so we can forward messages
let connections = [];

wss.on('connection', (ws) => {
  const connection = { id: connections.length + 1, alive: true, ws: ws };
  connections.push(connection);

  // Forward messages to everyone except the sender
  ws.on('message', function message(data) {
    connections.forEach((c) => {
      if (c.id !== connection.id) {
        c.ws.send(data);
      }
    });
  });

  // Remove the closed connection so we don't try to forward anymore
  ws.on('close', () => {
    connections.findIndex((o, i) => {
      if (o.id === connection.id) {
        connections.splice(i, 1);
        return true;
      }
    });
  });

  // Respond to pong messages by marking the connection alive
  ws.on('pong', () => {
    connection.alive = true;
  });
});

// Keep active connections alive
setInterval(() => {
  connections.forEach((c) => {
    // Kill any connection that didn't respond to the ping last time
    if (!c.alive) {
      c.ws.terminate();
    } else {
      c.alive = false;
      c.ws.ping();
    }
  });
}, 10000);
