import store from "./store/index.js";

import Count from "./components/count.js";
import List from "./components/list.js";
import Status from "./components/status.js";
import PayLaterWidget from "./components/payLaterWidget.js";
import SliceInFourWidget from "./components/sliceInFourWidget.js";
import PayLaterButton from "./components/payLaterButton.js";
import SliceInFourButton from "./components/sliceInFourButton.js";

const formElement = document.querySelector(".js-form");
const inputElement = document.querySelector("#new-item-field");
const payLaterButtonId = document.querySelector("#payLaterButton");
const sliceInFourButtonId = document.querySelector("#sliceInFourButton");

formElement.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let value = inputElement.value.trim();

  if (value.length) {
    store.dispatch("addItem", value);
    inputElement.value = "";
    inputElement.focus();
  }
});

payLaterButtonId.addEventListener("click", () => {
  store.dispatch("selectPayLater");
});

sliceInFourButtonId.addEventListener("click", () => {
  store.dispatch("selectSliceInFour");
});

const countInstance = new Count();
const listInstance = new List();
const statusInstance = new Status();
const payLaterWidget = new PayLaterWidget();
const sliceInFourWidget = new SliceInFourWidget();
const payLaterButton = new PayLaterButton();
const sliceInFourButton = new SliceInFourButton();

countInstance.render();
listInstance.render();
statusInstance.render();
payLaterWidget.render();
sliceInFourWidget.render();
payLaterButton.render();
sliceInFourButton.render();
