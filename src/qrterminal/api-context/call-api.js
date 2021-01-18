import axios from "axios";
import {baseURL} from "./api-context";

export const callAPI = (method, url, data, params) => {

    const headers = {
        'Content-Type': 'application/json',
        'Data-Type': 'json',
        'Accept': 'application/json; charset=utf-8'
    };

    return axios({
        headers: headers,
        baseURL: baseURL,
        url: url,
        method: method,
        data: data,
        params: params,
    });
}
