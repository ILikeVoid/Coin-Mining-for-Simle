import {API} from "./api";
import axios from "axios";

export const authApi = {
    login: (email, password) => {
        return API.post('auth/login/', {
            email,
            password
        })
    },
    register: (email, password) => {
        return API.post('auth/register/', {
            email,
            password
        })
    },
    logout: (refresh_token) => {
        return API.post('auth/logout/', {refresh_token})
    }
}

