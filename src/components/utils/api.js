const PIXEL_KAIROS_API = 'http://localhost/pixelKairos/public/api/';
const TOKEN_KEY = 'PK_TOKEN';

class ApiWrapper {
  static getData(entity) {
    return fetch(
      PIXEL_KAIROS_API+entity
    )
      .then(response => response.json());
  }

  static isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

  static makeLogin(credentials) {
    return fetch(
      PIXEL_KAIROS_API+'login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(credentials)
      }
    ).then(response => response.json())
    .then(response => {
      if (response.error) {
        console.log(response.error);
        return 'error';
      }
      if (response.access_token) {
        console.log(response.access_token);
        localStorage.setItem(TOKEN_KEY, response.access_token);
        return 'success';
      }
    });
  }

  static logout() {
    let tokenToRemove = localStorage.getItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_KEY);
    return fetch(
      PIXEL_KAIROS_API+'logout', {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${tokenToRemove}`,
        },
      }
    ).then(response => response.json())
    .then(response => {
        console.log(response);
    });
  }
}

export default ApiWrapper;
