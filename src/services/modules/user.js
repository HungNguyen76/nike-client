import axios from "axios";

export default {
  // register: async (newUser) => {
  //   return await axios
  //     .post(`${import.meta.env.VITE_APP_URL}users`, newUser)
  //     .then((res) => res)
  //     .catch((err) => err);
  // },
  // login: async (data) => {
  //   return await axios
  //     .post(`${import.meta.env.VITE_APP_URL}users/login`, data)
  //     .then((res) => res)
  //     .catch((err) => err);
  // },
  // findAllUser: async () => {
  //   return axios.get(`${import.meta.env.VITE_APP_URL}users`)
  // },
  find: async () => {
    return await axios.get(`${import.meta.env.VITE_APP_SERVER_HOST_API}/users`)
  },
  login: async (data) => {
    return await axios.post(
      `${import.meta.env.VITE_APP_URL}/users/login`,
      data,
    )
      .then(res => res)
      .catch(err => err)
  },
};
