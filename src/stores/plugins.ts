import _ from "lodash";

const myPluginWithSnapshot = (store: any) => {
  let prevState = _.cloneDeep(store.state);
  store.subscribe((mutation: any, state: any) => {
    let nextState = _.cloneDeep(state);

    // 比较 prevState 和 nextState...

    // 保存状态，用于下一次 mutation
    prevState = nextState;
  });
};

const myPlugin = (store: any) => {
  // 当 store 初始化后调用
  store.subscribe((mutation: any, state: any) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
  });
};
const createWebSocketPlugin = (socket: any) => {
  return (store: any) => {
    socket.on("data", (data: any) => {
      store.commit("receiveData", data);
    });
    store.subscribe((mutation: any) => {
      if (mutation.type === "UPDATE_DATA") {
        socket.emit("update", mutation.payload);
      }
    });
  };
};

export { myPlugin, createWebSocketPlugin, myPluginWithSnapshot };
