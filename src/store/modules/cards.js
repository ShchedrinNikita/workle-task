import axios from 'axios'

const API_KEY = 'c76b4ca9ef04af0705de05f78e0699bb68738f511fe4b1a0937b41b367533444'
const state = {
    cards: [],
    currentPage: 1,
    pages: 59

}

const getters = {
    allCards: state => state.cards,
    currentPage: state => state.currentPage,
    pages: state => state.pages
}

const actions = {
    async fetchCards({ commit }, page = 1 ) {
        const result = await axios.get(`https://api.unsplash.com/photos?client_id=${API_KEY}&page=${page}&per_page=6`);

        commit('setCards', result.data)
        commit('setCurrentPageNumber', page)
    },
   
}

const mutations = {
    setCards: (state, cards) => (state.cards = cards),
    setCurrentPageNumber: (state, pageNumber) => (state.currentPage = pageNumber),
}

export default {
    state,
    getters,
    actions,
    mutations
}