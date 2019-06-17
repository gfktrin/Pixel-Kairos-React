export const PIXEL_KAIROS_API = 'http://localhost/pixelKairos/public/api/';
export const TOKEN_KEY = 'PK_TOKEN';

class ApiWrapper {
  static async getData(entity) {
    const response = await fetch(
      PIXEL_KAIROS_API+entity
    );

    return await response.json();
  }

  static isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

  static async makeLogin(credentials) {
    const response = await fetch(
      PIXEL_KAIROS_API+'login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(credentials)
      }
    );

    return await response.json();
  }

  static async logout() {
    const tokenToRemove = localStorage.getItem(TOKEN_KEY);

    localStorage.removeItem(TOKEN_KEY);

    const response = await fetch(
      PIXEL_KAIROS_API+'logout', {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${tokenToRemove}`,
        },
      }
    );

    return await response.json();
  }
}

export default ApiWrapper;
