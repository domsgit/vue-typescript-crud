const tt = {
  state: {
    lists: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    gLists: (state: any) => state.lists,
    doneTodos: (state: any) => {
      return state.lists.filter((todo: any) => todo.done)
    },
    doneTodosCount: (state: any, getters: any) => {
      return getters.doneTodos.length
    },
    getTodoById: (state: any) => (id: any) => {
      return state.lists.find((todo: any) => todo.id === id)
    }
  },
  mutations: { 
    mLists({lists}: {lists: any}, newLists: any) {
      lists = newLists
    }
  },
  actions: {
    aLists({commit}: { commit: any }) {
      commit('mLists', [{name: 'hhhh'}])
    }
  }
};

export default tt;
