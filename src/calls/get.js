import axios from 'axios';

const BASE_URL = 'https://dev.to/api/';

const getAll = () => {
    return axios
        .get(`${BASE_URL}/articles`)
        .then(response => response.data.slice(3));
};

const getPromoted = () => {
    return axios
        .get(`${BASE_URL}/articles`)
        .then(response => response.data.slice(0,3));
};

const getPopular = () => {
    return axios
        .get(`${BASE_URL}/articles`)
        .then(response => response.data.slice(0,3));
};

const getRandom = () => {
    return axios
        .get(`${BASE_URL}/articles`)
        .then(response => response.data[Math.floor(Math.random() * response.data.length)]);
};


/** @param {string} resource */
/** @param {string} id */
const getSingle = (id) => {
    return axios
        .get(`${BASE_URL}/articles/${id}`);
};



export const ApiProvider = {
    getAll,
    getPromoted,
    getPopular,
    getRandom,
    getSingle,
    // post,
};