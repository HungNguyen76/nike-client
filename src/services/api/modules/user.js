import axios from "axios";

export default {
  register: async (newUser) => {
    return await axios.post(
        `${import.meta.env.VITE_APP_SERVER_HOST_API}/users`,
        newUser,
    )
        .then(res => res)
        .catch(err => err)
  },
  login: async (data) => {
    return await axios.post(
        `${import.meta.env.VITE_APP_SERVER_HOST_API}/users/login`,
        data,
    )
        .then(res => res)
        .catch(err => err)
  },
  authenToken: async (data) => {
    return await axios.post(
        `${import.meta.env.VITE_APP_SERVER_HOST_API}/users/authen-token`,
        data,
    )
  },
  resend: async (data) => {
    return await axios.get(
        `${import.meta.env.VITE_APP_SERVER_HOST_API}/users/resend`,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
    )
        .then(res => res)
        .catch(err => err)
  },
  changePassword: async (data) => {
    return await axios.post(
        `${import.meta.env.VITE_APP_SERVER_HOST_API}/users/change-password`,
        data,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
    )
        .then(res => res)
        .catch(err => err)
  },
  find: async () => {
    return await axios.get(`${import.meta.env.VITE_APP_SERVER_HOST_API}/users`);
  },
};
