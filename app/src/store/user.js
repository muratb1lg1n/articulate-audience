import api from './api';

const state = {
    user: '',
    userPosts: [],
    error: null
};

const getters = {
    user(state){
        return state.user;
    },
    userPosts(state){
        return state.userPosts;
    },
    error(state){
        return state.error;
    }
};

const mutations = {
    USER(state,payload){
        state.user = payload;
    },
    USER_POST(state,payload){
        state.userPosts = payload;
    },
    ERROR(state,payload){
        state.error = payload;
    }
};

const actions = {
    async userLogin({commit}, payload){
        commit('ERROR','');
        api.post("login", payload)
        .then(payload =>{
            if (payload.data.success==false){
                commit('ERROR',payload.data.response);
            } else {
                localStorage.setItem('token',payload.data.token);
                window.location = '/';
            }
        });
    },
    async userSignup({commit}, payload){
        api.post("signup",payload)
        .then(payload =>{
            if (payload.data.success==false){
                commit('ERROR',payload.data.response);
            } else {
                window.location = '/';
            }
<<<<<<< HEAD
        });
    },
    async userReset({commit}, payload){
        api.post("reset",payload)
        .then(payload =>{
            if (payload.data.success==false){
                commit('ERROR',payload.data.response);
            } else {
                window.location = '/';
            }
        });
    },
    async userPassword({commit}, payload){
        api.post("password",payload)
        .then(payload =>{
            if (payload.data.success==false){
                commit('ERROR',payload.data.response);
            } else {
                window.location = '/';
            }
=======
>>>>>>> 9fdca4a51caf4a9e7f6dac5c570e31ee142de983
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