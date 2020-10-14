import api from './api';

const state = {
    kullanici: {
        nickname:'',
        aciklama:''
    },
    kullaniciPaylasimlar: []
};

const getters = {
    kullanici(state){
        return state.kullanici;
    },
    kullaniciPaylasimlar(state){
        return state.kullaniciPaylasimlar;
    }
};

const mutations = {
    KULLANICI(state,veri){
        state.kullanici = veri;
    },
    KULLANICI_PAYLASIM(state,veri){
        state.kullaniciPaylasimlar = veri;
    },
};

const actions = {
    async kullaniciGiris({commit}, veri){
        api.post("giris",veri)
        .then(veri =>{
            localStorage.setItem('token',veri.data.token);
            window.location = '/';
        });
    },
    async kullaniciKaydol({commit}, veri){
        api.post("kaydol",veri)
        .then(veri =>{
            window.location = '/';
        });
    },
    async kullaniciProfil({commit}, veri){
        api.get("profil")
        .then(veri =>{
            commit('KULLANICI',veri.data.profilBilgisi);
        });
    },
    async kullaniciProfilPaylasim({commit}, veri){
        api.get("profilpaylasim")
        .then(veri =>{
            commit('KULLANICI_PAYLASIM',veri.data);
        });
    },
    async aciklamaDegis({commit}, veri){
        api.post()
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