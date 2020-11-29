import api from './api';

const state = {
    otherProfile: {},
    otherPosts: []
};

const getters = {
    otherProfile(state){
        return state.otherProfile;
    },
    otherPosts(state){
        return state.otherPosts;
    }
};

const mutations = {
    OTHER_PROFILE(state, payload){
        state.otherProfile =  payload;
    },
    OTHER_POST_LISTING(state, payload){
        state.otherPosts =  payload;
    }
};

const actions = {
    otherProfileGet({commit},payload){
        api.get('otherprofile/'+payload).then(res=>{
            commit('OTHER_PROFILE', res.data);
        });
    },
    otherPostListing({commit},payload){
        api.get('otherpost/'+payload).then(res=>{
            commit('OTHER_POST_LISTING', res.data);
        });
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}