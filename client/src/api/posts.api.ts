import axios from "axios";
import Cookies from "ts-cookies";
import { api_url } from "../environment/environment";
import { Post } from "../types/post.types";

export const getPosts = () => {
    return axios.request<Post[]>({
        url: `${api_url}/posts`,
        method: 'get',
    }).then((res) => res.data);
}

export const creaetePost = (data: Post) => {
    return axios.request({
        url: `${api_url}/posts`,
        method: 'post',
        headers: {
            "Authorization": `Bearer ${Cookies.get("token")}`,
        },
        data
    }).then((res) => res.data);
}

export const updatePost = (data: Post, id: string) => {
    return axios.request({
        url: `${api_url}/posts/${id}`,
        method: 'put',
        headers: {
            "Authorization": `Bearer ${Cookies.get("token")}`,
        },
        data
    }).then((res) => res.data);
}

export const deletePost = (id: string) => {
    return axios.request({
        url: `${api_url}/posts/${id}`,
        method: 'delete',
        headers: {
            "Authorization": `Bearer ${Cookies.get("token")}`,
        },
    }).then((res) => res.data);
}