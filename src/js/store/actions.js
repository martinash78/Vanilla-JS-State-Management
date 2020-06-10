export default {
  addItem(context, payload) {
    context.commit("addItem", payload);
  },
  clearItem(context, payload) {
    context.commit("clearItem", payload);
  },
  selectPayLater(context, payload) {
    context.commit("selectPayLater", payload);
  },
  selectSliceInFour(context, payload) {
    context.commit("selectSliceInFour", payload);
  },
};
