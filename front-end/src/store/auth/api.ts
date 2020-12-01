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

  updateProfileImage: async (payload) => {
    const url = 'http://localhost:4000/updateProfileImage';
    const options = Object.assign(
      {},
      {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : "Bearer " + localStorage.getItem('jwt')
        },
        body: JSON.stringify({ userId: payload.userId, imageUrl: payload.imageUrl}),
      }
    )
    const response = await fetch(url, options)
    .then((response) => response.json())
    .catch((err) => console.log(err))

    return response;
  }
};
