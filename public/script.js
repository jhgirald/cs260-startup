function setCookie(name, val) {
    const url = `/cookie/${name}/${val}`;
  
    fetch(url, {
      method: 'POST',
    })
    .then((response) => response.json())
    .then((jsonResponse) => {
      console.log(jsonResponse);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
}

function showPopup() {

  document.getElementById('welcomePopup').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}
function closePopup() {
  document.getElementById('welcomePopup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}
function loadPopup(){
  document.addEventListener('DOMContentLoaded', function() {
    username = getCookie("username");
    if(username != null){
    document.getElementById('welcome_text').innerText = "Welcome " + username + "!";
    }
    else {
      window.location.href = `login.html`
    }
    showPopup();
  });
}
function get_general_recipes(){
import("cookhub").then(async (cookhubModule) => {
  const { CooklangRepository } = cookhubModule;

const repo = new CooklangRepository();

await repo.initialize("nicholaswilde", "recipes", "cook/breads");

const recipes = repo.recipes;

return recipes;
});

}


function quote(){
  fetch('https://api.quotable.io/random', )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('welcome_quote').innerText = data.content;
      document.getElementById('quote_author').innerText = data.author;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}



async function loadRLRecipes(){

  const url = '/user/recipe'
  username = getCookie("username");
  const urlUser = `/user/recipe/${username}`
  let userRecipes;
  fetch(urlUser, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },})
    .then((response) => response.json())
    .then((data) => {
      // document.getElementById('welcome_quote').innerText = data.content;
      // document.getElementById('quote_author').innerText = data.author;
      userRecipes = data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  await new Promise(r => setTimeout(r, 1000));
  if(userRecipes["recipes"].length < 2){
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },})
      .then((response) => response.json())
      .then((data) => {
        document.getElementById('leftRecipeTitle').innerText = data["recipes"][0]["name"];
        document.getElementById('leftRecipeInstructions').innerText = data["recipes"][0]["instructions"][0];
        document.getElementById('rightRecipeTitle').innerText = data["recipes"][1]["name"];
        document.getElementById('rightRecipeInstructions').innerText = data["recipes"][1]["instructions"][0];
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  else{
    document.getElementById('leftRecipeTitle').innerText = userRecipes["recipes"][0]["name"];
    document.getElementById('leftRecipeInstructions').innerText = userRecipes["recipes"][0]["instructions"][0];
    document.getElementById('rightRecipeTitle').innerText = userRecipes["recipes"][1]["name"];
    document.getElementById('rightRecipeInstructions').innerText = userRecipes["recipes"][1]["instructions"][0];
  }
}