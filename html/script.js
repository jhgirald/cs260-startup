function logIn() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    // Get auth from backend
    //Login
    window.location.href = `main.html`;//get auth token and info of the user and send it over
    //Otherwise
    // showLoginFailMessage();
}
function showLoginFailMessage() {
    const text = document.getElementById("authText");
    text.style.color = 'red';
    text.textContent = 'Wrong Username or Password';
  }
  