import { registerHandle } from "./scripts/register.js";

const breadcrumbs = document.getElementById("breadcrumbs");

if (document.getElementById("regitser-form")) {
  const registerForm = document.getElementById("regitser-form");
  registerForm.addEventListener("submit", async function (event) {
    registerHandle(event, registerForm);
    location.assign("http://localhost:6969/login");
    // await fetch("http://localhost:6969/login", { method: "GET" });
  });
}

if (document.getElementById("login-form")) {
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function (event) {
    loginHandle(event, loginForm);
    location.assign("http://localhost:6969/");
  });
}

window.onload = function () {
  const currPath = window.location.pathname;
  let liElement1 = document.createElement("li");
  let liElement2 = document.createElement("li");
  let spanELement = document.createElement("span");
  let aElement1 = document.createElement("a");
  let aElement2 = document.createElement("a");

  switch (currPath) {
    case "/register":
      aElement1.href = "/";
      aElement1.style.textDecoration = "underline";
      aElement1.style.color = "#337ab7";
      aElement1.appendChild(document.createTextNode("Home"));
      liElement1.appendChild(aElement1);
      breadcrumbs.appendChild(liElement1);

      spanELement.appendChild(document.createTextNode("/"));
      breadcrumbs.append(spanELement);

      aElement2.appendChild(document.createTextNode("Register"));
      liElement2.appendChild(aElement2);
      breadcrumbs.appendChild(liElement2);
      break;
    case "/login":
      aElement1.href = "/";
      aElement1.style.textDecoration = "underline";
      aElement1.style.color = "#337ab7";
      aElement1.appendChild(document.createTextNode("Home"));
      liElement1.appendChild(aElement1);
      breadcrumbs.appendChild(liElement1);

      spanELement.appendChild(document.createTextNode("/"));
      breadcrumbs.append(spanELement);

      aElement2.appendChild(document.createTextNode("Login"));
      liElement2.appendChild(aElement2);
      breadcrumbs.appendChild(liElement2);
      break;
    default:
      break;
  }
};

// const route = function (event) {
//   event = event || window.event;
//   event.preventDefault();
//   window.history.pushState({}, "", event.target.href);
// };

// const routes = {
//   //   404: "views/404.html", TOOD:add 404
//   "/": "views/index.html",
//   "/register": "views/register.html",
//   "/login": "views/login.html",
// };

// const handleLocation = async function () {
//   const path = window.location.pathname;
//   const route = routes[path]; //|| routes[404];
//   const html = await fetch(route).then((data) => data.text());
// };
