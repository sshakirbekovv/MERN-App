import axios from "axios";
import Cookies from "ts-cookies";
import { api_url } from "../environment/environment";
import { User } from "../types/user.types";

export const getUsers = () => {
    return axios.request<User[]>({
        url: `${api_url}/users`,
        method: 'get',
        headers: {
            "Authorization": `Bearer ${Cookies.get("token")}`,
        },
    }).then((res) => res.data);
}

export const getUser = (id: any) => {
    return axios.request<User>({
        url: `${api_url}/users/${id}`,
        method: 'get',
        headers: {
            "Authorization": `Bearer ${Cookies.get("token")}`,
        },
    }).then((res) => res.data);
}

export const creaeteUser = (data: User) => {
    return axios.request({
        url: `${api_url}/users`,
        method: 'post',
        headers: {
            "Authorization": `Bearer ${Cookies.get("token")}`,
        },
        data
    }).then((res) => res.data);
}

export const updateUser = (data: User, id: string) => {
    return axios.request({
        url: `${api_url}/users/${id}`,
        method: 'put',
        headers: {
            "Authorization": `Bearer ${Cookies.get("token")}`,
        },
        data
    }).then((res) => res.data);
}

export const deleteUser = (id: string) => {
    return axios.request({
        url: `${api_url}/users/${id}`,
        method: 'delete',
        headers: {
            "Authorization": `Bearer ${Cookies.get("token")}`,
        },
    }).then((res) => res.data);
}