import * as request from "../request"

export const Requestregister = async (payload) => {
    try {
        const res = await request.post('/auth/register', payload);
        return res;
    } catch (error) {
        return error;
    }
};