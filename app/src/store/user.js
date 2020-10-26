import api from './api';

const state = {
    user: '',
    userPosts: []
};

const getters = {
    user(state){
        return state.user;
    },
    userPosts(state){
        return state.userPosts;
    }
};

const mutations = {
    USER(state,payload){
        state.user = payload;
    },
    USER_POST(state,payload){
        state.userPosts = payload;
    },
};

const actions = {
    async userLogin({commit}, payload){
        api.post("login", payload)
        .then(payload =>{
            localStorage.setItem('token',payload.data.token);
            window.location = '/';
        });
    },
    async userSignup({commit}, payload){
        api.post("signup",payload)
        .then(payload =>{
            window.location = '/';
        });
    },
    async userProfile({commit}, payload){
        api.get("profile")
        .then(payload =>{
            commit('USER',payload.data.profileInfo);
        });
    },
    async photoUpdate({commit}, payload){
        api.post("photoupdate",payload)
        .then(payloadPhoto =>{
            api.get("profile")
            .then(payload =>{
                commit('USER',payload.data.profileInfo);
            });
        });
    },
    async userProfilePost({commit}, payload){
        api.get("profilepost")
        .then(payload =>{
            commit('USER_POST',payload.data.reverse());
        });
    },
    async descriptionUpdate({commit}, payload){
        api.put("profile",{description: payload})
        .then(payload =>{
            commit('USER', payload.data.profileInfo)
        });
    },
    async userLogout({commit}, payload){
        await localStorage.removeItem('token');
        window.location = await '/login';
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}