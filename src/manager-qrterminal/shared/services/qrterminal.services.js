import {callAPI} from "../../api-context/call-api";

const url = "/qrterminal";

export function searchData(params){
    return callAPI('GET', url, {}, params);
}

export const findByID = (params) => {
    return callAPI(url, params);
}

export const createQrTerminal = (data) => {
    return callAPI('POST', url, data);
}

export const updateQrTerminal = (data) => {
    return callAPI('PUT', url, data);
}
