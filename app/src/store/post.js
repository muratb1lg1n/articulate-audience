import api from './api';

const state = {
    posts: []
};

const getters = {
    posts(state){
        return state.posts;
    }
};

const mutations = {
    POST_LISTING(state, payload){
        state.posts =  payload;
    },
    POST_DELETE(state, payload){
        state.posts.splice(state.posts.indexOf(payload), 1);
    }
};

const actions = {
    postListing({commit,payload}){
        api.get('post').then(res=>{
            commit('POST_LISTING', res.data.reverse());
        });
    },
    postAdding({commit},payload){
        api.post('post', payload).then(res=>{
            api.get('post').then(res=>{
                commit('POST_LISTING', res.data.reverse());
            });
        });
    },
    postDelete({commit},payload){
        api.delete('post/'+ payload._id).then(res=>{
            commit('POST_DELETE',  payload);
        });
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}