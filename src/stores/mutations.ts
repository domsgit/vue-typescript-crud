export const increment = (state: any) => {
  state.count++
  state.history.push('increment')
}

export const decrement = (state: any) => {
  state.count--
  state.history.push('decrement')
}
