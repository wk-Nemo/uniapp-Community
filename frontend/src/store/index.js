import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: '摘星人',
    fans: 3,
    focus: 8,
    grade: 7,
    age: 18,
    sexy: true,
    location: '安徽淮北'
  },
  mutations: {
    addAge(state, n) {
      state.age = state.age + n;
    },
    changeSexy(state) {
      state.sexy = !state.sexy;
    },
    changeLocation(state, location) {
      state.location = location;
    }
  }
})

export default store;