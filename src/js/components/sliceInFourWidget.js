import Component from "../lib/component.js";
import store from "../store/index.js";

export default class SliceInFourWidget extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector("#sliceInFourWidget"),
    });
    this.element.style.display = "none";
  }

  render() {
    let self = this;
    let show = store.state.sliceInFourWidget.show;
    console.log("sliceInFourWidget=" + show);
    if (show === true) {
      self.element.style.display = "block";
    } else {
      self.element.style.display = "none";
    }
    console.log(self.element.style.display);

    self.element.innerHTML = `
    <textarea>Slice in Four Widget</textarea>
    `;
  }
}
