class create{
setCookie(name, val) {
    const url = `/api/cookie/${name}/${val}`;
  
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
validatePassword(passwordInput) {
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

validateUsername(usernameInput) {
    const username = usernameInput.value;

    const minLength = 8;

    if (username.length >= minLength) {
      return true;
    } else {
      return false;
    }
  }
async createAccount(){
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const repassword = document.getElementById("repassword");
    this.passwordLabel = document.querySelector('label[for="password"]');
    this.usernameLabel = document.querySelector('label[for="username"]');
    this.passwordLabel.style.color = "";
    this.passwordLabel.textContent = "Password";
    this.usernameLabel.style.color = "";
    this.usernameLabel.textContent = "Username";

    if (this.validatePassword(password) && this.validatePassword(repassword) && password.value === repassword.value){

      const url = `/api/user/create/${username.value}/${password.value}`;
      let jsonResponse;
      fetch(url, {
        method: 'POST',
      })
      .then((response) => response.json())
      .then((data) => {
        jsonResponse = data;
        console.log(jsonResponse);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      await new Promise(r => setTimeout(r, 1000));
      if(jsonResponse["error"] == "Username already taken"){
        usernameLabel.style.color = "red";
        usernameLabel.textContent = "Check username";
      }
      else{
        
        this.setCookie("username", username.value);
        await new Promise(r => setTimeout(r, 1000));
        // window.location.href = `main.html`;//get auth token, create account and info of the user and send it over
        return true;
      }
    }else{
        passwordLabel.style.color = "red";
        passwordLabel.textContent = "Check passwords";

    }
    if (!this.validateUsername(username)){

        usernameLabel.style.color = "red";
        usernameLabel.textContent = "Check username";
    }
    return false;
}
}

const createA = new create();
export {createA};