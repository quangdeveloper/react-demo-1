import {callAPI} from "../../api-context/call-api";
import {clearStorage} from "../LocalStorageApp";

export function login(data) {
    return callAPI("POST", "/login", data, {});
}

export function logout(data) {
    clearStorage();
    return callAPI("POST", "/logout", data, {});
}

export function register(data) {
    return callAPI("POST", "/register", data, {});
}
