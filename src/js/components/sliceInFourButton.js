import Component from "../lib/component.js";
import store from "../store/index.js";

export default class SliceInFourButton extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector("#sliceInFourButton"),
    });
  }

  render() {
    let self = this;
    let show = store.state.sliceInFourButton.show;
    if (show === true) {
      self.element.style.display = "block";
    } else {
      self.element.style.display = "none";
    }
    self.element.innerHTML = `
    <button class="[ c-button ] [ new-item__button ]" id="sliceInFour">Slice In Four</button>
    `;
  }
}
