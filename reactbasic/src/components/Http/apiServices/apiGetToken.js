import * as request from "../request"

export const token = async (payload) => {
    try {
        const res = await request.post('/auth/login', payload);
        return res;
    } catch (error) {
        return 1;
    }
};

export const getCurrentUser = async (token) => {
    try {
        const res = await request.get('/api/profile', token);
        return res;
    } catch (error) {
        return error;
    }
};