import Vuex from 'vuex';
import articles from './modules/articles';

const createStore = () => {
  return new Vuex.Store ({
    modules: {
      articles,
    },
  });
};

export default createStore;
