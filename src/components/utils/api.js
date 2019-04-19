const PIXEL_KAIROS_API = 'http://api.pixelkairos.com.br/';

class ApiWrapper {
  static getData(entity) {
    return fetch(
      PIXEL_KAIROS_API+entity
    )
      .then(response => response.json());
  }
}

export default ApiWrapper;
