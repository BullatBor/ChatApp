import axios from 'axios';


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {'API-KEY': 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f'}
})

export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(responce => responce.data)
    },
    async follow(id) {
        return axiosInstance.post(`follow/${id}`).then(responce => responce.data)
    },
    async unfollow(id) {
        return axiosInstance.delete(`follow/${id}`).then(responce => responce.data)
    },
    async getProfileInfo(id) {
        console.warn("Obsolete method. Please profileAPI object.")
        return profileAPI.getProfileInfo(id)
    }
}

export const profileAPI = {
    async getProfileInfo(id) {
        return axiosInstance.get(`profile/${id}`)
        .then(responce => responce.data)
    },
    async getProfileStatus(id) {
        return axiosInstance.get(`profile/status/${id}`)
        .then(responce => {
           return responce.data
        })
    },
    async updateStatus(status) {
        return axiosInstance.put(`profile/status`, {status: status})
        .then(responce => {
            return responce.data
        })
    }
}

export const authAPI = {
    async auth() {
        return axiosInstance.get(`auth/me`)
        .then(responce => responce.data)
    },

    async login(email, password, rememberMe = false, captcha) {
        return axiosInstance.post(`auth/login`, {email: email, password: password, rememberMe: rememberMe, captcha: captcha})
        .then(responce => {           
            return responce.data
        })
    },

    async logout() {
        return axiosInstance.delete(`auth/login`).then(responce => {           
            return responce.data
        })
    }
}