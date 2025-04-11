import axios from 'axios';
import Strapi from 'strapi-sdk-js';

export function getMaithAPI() {
    const maithURL = process.env.NEXT_PUBLIC_MAITH_API_URL || 'https://mathai.kro.kr';
    const maithAPI = axios.create({
        baseURL: `${maithURL}`,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return maithAPI;
}

export function getAuthenticatedMaithAPI() {
    const maithAPI = getMaithAPI();
    const token = localStorage.getItem('accessToken');

    if (!token) throw new Error('Not Authenticated');
    return axios.create({
        ...maithAPI.defaults,
        headers: {
            ...maithAPI.defaults.headers,
            Authorization: `Bearer ${token}`,
        },
    });
}

export function getStrapiClient() {
    const res = new Strapi({
        url: process.env.NEXT_PUBLIC_STRAPI_URL || 'https://maith-cms.alex4386.me',
    });

    res.setToken(process.env.NEXT_PUBLIC_STRAPI_TOKEN || '');
    return res;
}