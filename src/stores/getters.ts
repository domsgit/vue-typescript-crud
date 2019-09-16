export const count = (state: any) => state.count;

const limit = 5;

export const recentHistory = (state: any) => {
  const end = state.history.length;
  const begin = end - limit < 0 ? 0 : end - limit;
  return state.history.slice(begin, end).join(", ");
};
