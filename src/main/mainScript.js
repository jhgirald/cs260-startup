class mainstuff{
 getCookie(name) {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
          const [cookieName, cookieValue] = cookie.trim().split('=');
          if (cookieName === name) {
            return decodeURIComponent(cookieValue);
          }
        }
        return null;
    }
 showPopup() {

  document.getElementById('welcomePopup').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}
 closePopup() {
  document.getElementById('welcomePopup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}
 loadPopup(){
  document.addEventListener('DOMContentLoaded', function() {
    username = this.getCookie("username");
    if(username != null){
    document.getElementById('welcome_text').innerText = "Welcome " + username + "!";
    }
    else {
      window.location.href = `login.html`
    }
    showPopup();
  });
}


 quote(){
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



async loadRLRecipes(){

  const url = '/api/user/recipe'
  let username = this.getCookie("username");
  const urlUser = `/api/user/recipe/${username}`
  let userRecipes;
  fetch(urlUser, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },})
    .then((response) => response.json())
    .then((data) => {
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
}

const classStuffA = new mainstuff();
export {classStuffA};