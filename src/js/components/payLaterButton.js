import Component from "../lib/component.js";
import store from "../store/index.js";

export default class PayLaterButton extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector("#payLaterButton"),
    });
    this.element.style.display = "none";
  }

  render() {
    let self = this;
    let show = store.state.payLaterButton.show;
    if (show === true) {
      self.element.style.display = "block";
    } else {
      self.element.style.display = "none";
    }
    self.element.innerHTML = `
    <button class="[ c-button ] [ new-item__button ]" id="payLater">Klarna Pay Later</button>
    `;
  }
}
