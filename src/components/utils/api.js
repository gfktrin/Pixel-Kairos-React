const PIXEL_KAIROS_API = 'http://localhost/pixelKairos/public/api/';
export const TOKEN_KEY = 'PK_TOKEN';

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
    ).then(response => response.json());
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
