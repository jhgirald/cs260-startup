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
async function logIn() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    // Get auth from backend
    //Login
    setCookie("username", username.value);
    await new Promise(r => setTimeout(r, 2000));
    window.location.href = `main.html`;//get auth token and info of the user and send it over
    //Otherwise
    // showLoginFailMessage();
}
function showLoginFailMessage() {
    const text = document.getElementById("authText");
    text.style.color = 'red';
    text.textContent = 'Wrong Username or Password';
  }


function createAccount(){
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const repassword = document.getElementById("repassword");
    passwordLabel = document.querySelector('label[for="password"]');
    usernameLabel = document.querySelector('label[for="username"]');
    passwordLabel.style.color = "";
    passwordLabel.textContent = "Password";
    usernameLabel.style.color = "";
    usernameLabel.textContent = "Username";

    if (validatePassword(password) && validatePassword(repassword) && password.value === repassword.value){
        window.location.href = `main.html`;//get auth token, create account and info of the user and send it over
    }else{
        passwordLabel.style.color = "red";
        passwordLabel.textContent = "Check passwords";

    }
    if (!validateUsername(username)){

        usernameLabel.style.color = "red";
        usernameLabel.textContent = "Check username";
    }

}
  

function validatePassword(passwordInput) {
    const password = passwordInput.value;

    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);

    if (password.length >= minLength && hasUppercase && hasLowercase && hasDigit) {
      return true;
    } else {
      return false;
    }
  }

  function validateUsername(usernameInput) {
    const username = usernameInput.value;

    const minLength = 8;

    if (username.length >= minLength) {
      return true;
    } else {
      return false;
    }
  }