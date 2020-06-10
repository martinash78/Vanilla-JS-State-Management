import Component from "../lib/component.js";
import store from "../store/index.js";

export default class PayLaterButton extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector("#payLaterWidget"),
    });
    this.element.style.display = "none";
  }

  render() {
    let self = this;
    let show = store.state.payLaterWidget.show;
    if (show === true) {
      self.element.style.display = "block";
    } else {
      self.element.style.display = "none";
    }
    self.element.innerHTML = `
    <textarea>Pay Later Widget</textarea>
    `;
  }
}
