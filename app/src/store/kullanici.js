import api from './api';

const state = {
    kullanici: ''
};

const getters = {
    kullanici(state){
        return state.kullanici;
    },
};

const mutations = {
    KULLANICI(state,veri){
        state.kullanici = veri;
    }
};

const actions = {
    async kullaniciGiris({commit}, veri){
        api.post("giris",veri)
        .then(veri =>{
            localStorage.setItem('token',veri.data.token);
            window.location = '/';
        });
    },
    async kullaniciCikis({commit}, veri){
        await localStorage.removeItem('token');
        window.location = await '/giris';
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}