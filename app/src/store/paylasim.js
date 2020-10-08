import api from './api';

const state = {
    paylasimlar: []
};

const getters = {
    paylasimlar(state){
        return state.paylasimlar;
    },
};

const mutations = {
    PAYLASIM_LISTELE(state,veri){
        state.paylasimlar = veri;
    },
    PAYLASIM_EKLE(state,veri){
        state.paylasimlar.push(veri);
    },
    PAYLASIM_SIL(state,veri){
        state.paylasimlar.splice(state.paylasimlar.indexOf(veri),1);
    }
};

const actions = {
    paylasimListele({commit}, veri){
        api.get('paylasim').then(res=>{
            commit('PAYLASIM_LISTELE', res.data);
        });
    },
    paylasimEkle({commit}, veri){
        api.post('paylasim',{icerik:veri}).then(res=>{
            commit('PAYLASIM_EKLE', veri)
        });
    },
    paylasimSil({commit}, veri){
        api.delete('paylasim/'+veri._id).then(res=>{
            commit('PAYLASIM_SIL', veri);
        });
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}