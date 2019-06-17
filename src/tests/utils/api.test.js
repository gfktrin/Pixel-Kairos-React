import ApiWrapper,{ PIXEL_KAIROS_API } from "../../components/utils/api";

describe('ApiWrapper', () => {
  fit('fetches data from server', async () => {
    var mockFetchPromise = new Promise((resolve) => {
      resolve({
        ok: true,
        json: function() {
          return {id: '123'};
        }
      });
    });

    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const credentials = {
      email: 'test@email.com',
      password: 'strongpassword',
    };

    const expectedResponse = {
      body: JSON.stringify({ email: "test@email.com", password:"strongpassword" }),
      headers: {"Content-Type": "application/json"},
      method: "POST",
    };

    const response = await ApiWrapper.makeLogin(credentials);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      PIXEL_KAIROS_API+'login',
      expectedResponse
    );
    expect(response).toEqual({ id: '123' });
  });
});
