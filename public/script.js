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

