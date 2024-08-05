import axios from "axios";

const AxiosHttpData = {
    // baseURL: 'http://localhost:3050/',
    baseURL: 'http://192.168.0.221:3050/',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    responseType: 'json',
    responseEncoding: 'json'
}

const Axios = axios.create(AxiosHttpData)

export const requestPortfolio = async (callback) => {
    const value = await Axios.get('/api/requestPortfolio').then((req, error) => {
        return (req.data);
    }).catch((error) => {
        return false;
    })

    callback(value);
}

export const requestSendEmail = async (props, callback) => {
    const value = await Axios.post('/api/sendmailToContact', props).then((req, error) => {
        return (req.data);
    }).catch((error) => {
        return false;
    })

    callback(value);
}


