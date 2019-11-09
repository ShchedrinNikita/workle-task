import axios from 'axios'

const API_KEY = 'c76b4ca9ef04af0705de05f78e0699bb68738f511fe4b1a0937b41b367533444'
const state = {
    cards: [],
    currentPage: 1
}

const getters = {
    allCards: state => state.cards
}

const actions = {
    async fetchCards({ commit }, page = 1 ) {
        console.log(state)
        const result = await axios.get(`https://api.unsplash.com/photos?client_id=${API_KEY}&page=${page}&per_page=6`);
        console.log(result.headers)
        console.log(state)
        commit('setCards', result.data)
        commit('setCurrentPageNumber', page)
    },
   
}

const mutations = {
    setCards: (state, cards) => (state.cards = cards),
    setCurrentPageNumber: (state, pageNumber) => (state.currentPage = pageNumber)
}

export default {
    state,
    getters,
    actions,
    mutations
}