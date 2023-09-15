import axios from "axios";

export default {
    findByCategory: async (category_id) => {
        return await axios.get(`${import.meta.env.VITE_APP_SERVER_HOST_API}/categories/` + category_id)
    },
    findAllCategory: async () => {
        return await axios.get(`${import.meta.env.VITE_APP_SERVER_HOST_API}/categories/`)
    }
}