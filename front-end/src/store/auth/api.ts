/* eslint-disable no-console */

export default {
  createUser: async (payload) => {
    const url = 'http://localhost:4000/signup';
    const options = Object.assign(
      {},
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );
    const response = await fetch(url, options)
      .then((response) => response.json())
      .catch((err) => console.log(err));

    return response;
  },

  userLogin: async (payload) => {
    const url = 'http://localhost:4000/signin';
    const options = Object.assign(
      {},
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );
    const response = await fetch(url, options)
      .then((response) => response.json())
      .catch((err) => console.log(err));

    return response;
  },

  followUser: async (followId) => {
    const url = 'http://localhost:4000/follow';
    const options = Object.assign(
      {},
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        },
        body: JSON.stringify({
          followId: followId,
        }),
      }
    );
    const response = await fetch(url, options)
      .then((response) => response.json())
      .catch((error) => console.log(error));

    return response;
  },
};
