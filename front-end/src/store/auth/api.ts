/* eslint-disable no-console */

export default {
  createUser: async (payload) => {
    const { name, username, 6password, email, profileImageUrl} = payload;
    console.log(payload, ' payload in api ')
    const url = 'http://localhost:4000/signup';
    const options = Object.assign(
      {},
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          password,
          username,
          email,
          image: profileImageUrl
        }),
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
};
