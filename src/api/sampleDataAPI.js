const API_ENDPOINT = 'http://localhost:3000';

const request = async (url) => {
  try {
    const response = await fetch(url);
    // console.log(response, 'request response')
    if (response.ok) {
      const data = await response.json();
      // console.log(data, 'response.ok')
      return data;
    } else {
      const errorData = await response.json();
      throw errorData;
    }
  } catch (e) {
    throw {
      message: e.message,
      status: e.status,
    };
  }
};

const api = {
  fetchSampleData: async () => {
    try {
      const result = await request(`${API_ENDPOINT}/requests`);
      // console.log(requests, 'fetchSampleData requests');
      return {
        isError: false,
        data: result
    };
    } catch (err) {
      return {
          isError: true,
          data: err
      };
    }
  },
};

export { api };
