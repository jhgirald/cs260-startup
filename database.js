const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('users');
const recipesCollection = db.collection('recipes');
const chatsCollection = db.collection('chats');
const notificationsCollection = db.collection('notifications');
const groupsCollection = db.collection('groups');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addUser(user) {
  const result = await userCollection.insertOne(JSON.parse(user));
  return result;
}
async function addRecipe(recipe) {
  const result = await recipesCollection.insertOne(recipe);
  return result;
}
async function addChat(chat) {
  const result = await chatsCollection.insertOne(chat);
  return result;
}
async function addNotification(notification) {
  const result = await notificationsCollection.insertOne(notification);
  return result;
}
async function addGroup(group) {
  const result = await groupsCollection.insertOne(group);
  return result;
}



async function getUser(user) {
  const query = {username: user};
  const cursor = userCollection.find(query);
  return cursor.toArray();
}
async function getRecipes(){
  const cursor = recipeCollection.find({});
  return cursor.toArray();
};

async function getRecipesByUser(recipeId, username) {
  const query = { username: username };
  const cursor = recipeCollection.find(query);
  return cursor.toArray();
};

async function getChat(chatId, username) {
  const query = { username: username };
  const cursor = chatCollection.find(query);
  return cursor.toArray();
}

async function getNotification(notificationId, username) {
  const query = { username: username };
  const cursor = notificationCollection.find(query);
  return cursor.toArray();
}

async function getGroup(groupId, username) {
  const query = { username: username };
  const cursor = groupCollection.find(query);
  return cursor.toArray();
}

module.exports = { addUser, addRecipe, addChat ,addNotification, addGroup, getUser, getRecipes, getRecipesByUser, getChat ,getNotification, getGroup };
