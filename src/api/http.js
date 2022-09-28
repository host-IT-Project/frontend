import Axios from 'axios';

/**
 * @TODO
 * baseURL 숨김 처리
 */
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
    delete: function del(url) {
        return axios.delete(url).then((res) => res.data);
    },
    patch: function patch(url, data) {
        return axios.patch(url, { data }).then((res) => res.data);
    },
};
