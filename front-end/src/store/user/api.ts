export default {
  createPost: async (payload) => {
    const url = 'http://localhost:4000/createPost';
    const options = Object.assign(
      {},
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        },
        body: JSON.stringify(payload),
      }
    );
    const response = await fetch(url, options)
      .then((response) => response.json())
      .catch((error) => console.log(error));

    return response;
  },

  storeImageToCloud: async (payload) => {
    const data = new FormData();
    data.append('file', payload);
    data.append('upload_preset', 'social-media-app');
    data.append('cloud_name', 'dxvtpzabx');

    const url = 'https://api.cloudinary.com/v1_1/dxvtpzabx/image/upload';
    const options = Object.assign(
      {},
      {
        method: 'POST',
        body: data,
      }
    );
    const response = await fetch(url, options)
      .then((response) => response.json())
      .catch((error) => console.log(error));

    return response;
  },

  fetchAllPosts: async () => {
    const url = 'http://localhost:4000/allPosts';
    const options = Object.assign(
      {},
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        },
      }
    );
    const response = await fetch(url, options)
      .then((response) => response.json())
      .catch((error) => console.log(error));

    return response;
  },

  fetchUserPosts: async () => {
    const url = `http://localhost:4000/userPosts`;
    const options = Object.assign(
      {},
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        },
      }
    );
    const response = await fetch(url, options)
      .then((response) => response.json())
      .catch((error) => console.log(error));

    return response;
  },

  updateUserPostLikes: async (id) => {
    const url = 'http://localhost:4000/likeUserPost';
    const options = Object.assign(
      {},
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        },
        body: JSON.stringify(id),
      }
    );
    const response = await fetch(url, options)
      .then((response) => response.json())
      .catch((error) => console.log(error));

    return response;
  },

  updateUserPostUnlikes: async (id) => {
    const url = 'http://localhost:4000/unlikeUserPost';
    const options = Object.assign(
      {},
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        },
        body: JSON.stringify(id),
      }
    );
    const response = await fetch(url, options)
      .then((response) => response.json())
      .catch((error) => console.log(error));

    return response;
  },
};
