console.log("hello");

import "../sass/styles.scss";
import 'bootstrap';
import{routes} from"./routes";

let pageArgument;

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";

  var pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument);
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());

const Button = (text) => {
  return `<button>${text}</button>`;
};

export{Button};
