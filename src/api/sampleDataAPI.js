const API_ENDPOINT = 'http://localhost:3000';

const request = async (url) => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
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
      return {
        isError: false,
        data: result,
      };
    } catch (err) {
      return {
        isError: true,
        data: err,
      };
    }
  },
};

export { api };
