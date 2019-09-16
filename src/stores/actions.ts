export const increment = ({ commit }: { commit: any }) => {
  commit("increment");
};
export const decrement = ({ commit }: { commit: any }) => {
  commit("decrement");
};

export const incrementIfOdd = ({
  commit,
  state
}: {
  commit: any;
  state: any;
}) => {
  if ((state.count + 1) % 2 === 0) {
    commit("increment");
  }
};

export const incrementAsync = ({ commit }: { commit: any }) => {
  setTimeout(() => {
    commit("increment");
  }, 1000);
};
