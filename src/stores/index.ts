import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";

import tt from "./modules/tt";
import { myPlugin, createWebSocketPlugin } from "./plugins";

import createLogger from "vuex/dist/logger";

const state = {
  count: 0,
  history: []
};

const logger = createLogger({
  collapsed: false, // 自动展开记录的 mutation
  filter(mutation, stateBefore, stateAfter) {
    // 若 mutation 需要被记录，就让它返回 true 即可
    // 顺便，`mutation` 是个 { type, payload } 对象
    return mutation.type !== "aBlacklistedMutation";
  },
  transformer(state: any) {
    // 在开始记录之前转换状态
    // 例如，只返回指定的子树
    return state.subTree;
  },
  mutationTransformer(mutation) {
    // mutation 按照 { type, payload } 格式记录
    // 我们可以按任意方式格式化
    return mutation.type;
  }
  // logger: console, // 自定义 console 实现，默认为 `console`
});

// const socketPlugin = createWebSocketPlugin(socket)

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state,
  getters,
  mutations,
  actions,
  modules: {
    tt
  },
  plugins: [myPlugin]
});

if (module.hot) {
  module.hot.accept(["./getters", "./actions", "./mutations"], () => {
    store.hotUpdate({
      getters: require("./getters"),
      actions: require("./actions"),
      mutations: require("./mutations")
    });
  });
}

export default store;
