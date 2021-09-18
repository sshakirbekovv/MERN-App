import axios from "axios";
import { api_url } from "../environment/environment";
import { User } from "../types/user.types";
import Cookies from 'ts-cookies';

export const signUp = (data: User) => {
    return axios.request({
        url: `${api_url}/auth/register`,
        method: 'post',
        data
    }).then((res) => {
        Cookies.set("token", res.data.token);
        Cookies.set("id_token", res.data.id);
    })
}

export const signIn = (data: User) => {
    return axios.request({
        url: `${api_url}/auth/login`,
        method: 'post',
        data
    }).then((res) => {
        Cookies.set("token", res.data.token);
        Cookies.set("id_token", res.data.id);
    })
}
