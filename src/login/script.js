class logining{
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
    async blabla() {
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        // Get auth from backend
        let jsonRes;
        //Login
        const url = `/api/user/login`;
        console.log(username.value);
        console.log(password.value);
        const data = {
          username: username.value,
          password: password.value,
        }
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json',
          },
        })
        .then((response) => response.json())
        .then((jsonResponse) => {
          jsonRes = jsonResponse;
          console.log(jsonResponse);
        })
        .catch((error) => {
          console.error('Error:', error);
        })
        ;
    
        await new Promise(r => setTimeout(r, 1000));
        console.log(jsonRes);
        if(jsonRes["token"] == "Auth"){
          console.log("YEAH BRUH");
           this.setCookie("username", username.value);
    
          await new Promise(r => setTimeout(r, 2000));
        //   window.location.href = `main.html`;//get auth token and info of the user and send it over
            return true;
        }
        else{
        //   showLoginFailMessage();
        }
    return false;
    }
}
    
    const loginingA = new logining();
    export {loginingA};