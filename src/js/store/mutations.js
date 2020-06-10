export default {
  addItem(state, payload) {
    state.items.push(payload);

    return state;
  },
  clearItem(state, payload) {
    state.items.splice(payload.index, 1);

    return state;
  },
  selectPayLater(state, payload) {
    state.sliceInFourWidget.show = false;
    state.payLaterWidget.show = true;

    return state;
  },
  selectSliceInFour(state, payload) {
    state.sliceInFourWidget.show = true;
    state.payLaterWidget.show = false;

    return state;
  },
};
