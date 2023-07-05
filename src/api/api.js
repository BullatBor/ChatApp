import axios from 'axios';


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {'API-KEY': '7e8f3aa0-97ac-40c7-af44-b97bf5e8ea6c'}
})

export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 10, isFriend = true) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}&friend=${isFriend}`)
        .then(responce => responce.data)
    },
    follow(id) {
        return axiosInstance.post(`follow/${id}`).then(responce => responce.data)
    },
    unfollow(id) {
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
    },
    async savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return axiosInstance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(responce => {
            return responce.data
        })
    },
    async saveProfile(profile){
        return axiosInstance.put("profile", profile).then(responce => {
            return responce.data
        })
    }
}

export const authAPI = {
    async auth() {
        return axiosInstance.get(`auth/me`)
        .then(responce => responce.data)
    },

    async login(email, password, rememberMe = false, captcha = null) {
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

export const securityAPI = {
    getCaptchaUrl() {
        return axiosInstance.delete(`security/get-captcha-url`).then(responce => {           
            return responce.data
        })
    }
}

export const dialogsAPI = {
    
    async newChat(userId = 29436) {
        return axiosInstance.put("dialogs/", {userId: userId}).then(responce => {
            return responce
        })
        const responce = await axiosInstance.put('dialogs', userId);
        debugger;
        return responce.data;
    }
}

export const postsAPI = {
    async getPosts(){
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const json = await responce.json();
        return json;
    }
}