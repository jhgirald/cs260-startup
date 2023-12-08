function setCookie(name, val) {
    const url = `/cookie/${name}/${val}`;
  
    fetch(url, {
      method: 'POST',
    })
    .then((response) => response.json())
    .then((jsonResponse) => {
      console.log(jsonResponse);
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
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('welcome_quote').innerText = data.content;
      document.getElementById('quote_author').innerText = data.author;
    });
}