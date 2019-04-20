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
      }
      if (response.access_token) {
        console.log(response.access_token);
        localStorage.setItem(TOKEN_KEY, response.access_token);
      }
    });
  }

  static logout() {
    localStorage.removeItem(TOKEN_KEY);
  }
}

export default ApiWrapper;
