import Axios from 'axios';
const axios = Axios.create({
    baseURL: 'https://31970935-739c-4289-9eda-04fb30cc0da0.mock.pstmn.io/',
});

export const http = {
    get: function get(url, params) {
        return axios.get(url, { params }).then((res) => res.data);
    },
    post: function post(url, data) {
        return axios.post(url, { data }).then((res) => res.data);
    },
};
