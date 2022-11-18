import Axios from 'axios';

const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export const http = {
    get: function get(url, params) {
        return axios.get(url, { params }).then((res) => res.data);
    },
    post: function post(url, data) {
        return axios.post(url, { data }).then((res) => res.data);
    },
    delete: function del(url) {
        return axios.delete(url).then((res) => res.data);
    },
    patch: function patch(url, data) {
        return axios.patch(url, { data }).then((res) => res.data);
    },
};
