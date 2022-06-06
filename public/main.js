import { registerHandle } from "./scripts/register.js";
import { loginHandle } from "./scripts/login.js";

const breadcrumbs = document.getElementById("breadcrumbs");

if (document.getElementById("regitser-form")) {
  const registerForm = document.getElementById("regitser-form");
  registerForm.addEventListener("submit", async function (event) {
    if (registerHandle(event, registerForm)) {
      location.assign("http://localhost:6969/login");
    }
  });
}

if (document.getElementById("login-form")) {
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function (event) {
    if (loginHandle(event, loginForm)) {
      location.assign("http://localhost:6969/");
    }
  });
}

function addElement(parentElement, children) {
  let element, elementToBeAdded;
  for (let child of children) {
    element = document.createElement(child.name);

    if (child.createTextNode) {
      element.appendChild(document.createTextNode(child.createTextNode));
    }

    if (child.href) {
      element.href = child.href;
    }

    if (child.style) {
      for (let [attrName, attrValue] of Object.entries(child.style)) {
        element.style[attrName] = attrValue;
      }
    }

    if (!elementToBeAdded) {
      elementToBeAdded = element;
    } else {
      element.appendChild(elementToBeAdded);
    }
  }

  parentElement.appendChild(element);
}

window.onload = function () {
  const currPath = window.location.pathname;
  // let liElement1 = document.createElement("li");
  // let liElement2 = document.createElement("li");
  // let spanELement = document.createElement("span");
  // let aElement1 = document.createElement("a");
  // let aElement2 = document.createElement("a");

  switch (currPath) {
    case "/register":
      // aElement1.href = "/";
      // aElement1.style.textDecoration = "underline";
      // aElement1.style.color = "#337ab7";
      // aElement1.appendChild(document.createTextNode("Home"));
      // liElement1.appendChild(aElement1);
      // breadcrumbs.appendChild(liElement1);

      // spanELement.appendChild(document.createTextNode("/"));
      // breadcrumbs.append(spanELement);

      // aElement2.appendChild(document.createTextNode("Register"));
      // liElement2.appendChild(aElement2);
      // breadcrumbs.appendChild(liElement2);

      addElement(breadcrumbs, [
        {
          name: "a",
          style: {
            textDecoration: "underline",
            color: "#337ab7",
          },
          href: "/",
          createTextNode: "Home",
        },
        { name: "li" },
      ]);

      addElement(breadcrumbs, [{ name: "span", createTextNode: "/" }]);

      addElement(breadcrumbs, [
        {
          name: "a",
          createTextNode: "Register",
        },
        {
          name: "li",
        },
      ]);
      break;
    case "/login":
      addElement(breadcrumbs, [
        {
          name: "a",
          href: "/",
          style: {
            textDecoration: "underline",
            color: "#337ab7",
          },
          createTextNode: "Home",
        },
        { name: "li" },
      ]);

      addElement(breadcrumbs, [{ name: "span", createTextNode: "/" }]);

      addElement(breadcrumbs, [
        {
          name: "a",
          createTextNode: "Login",
        },
        {
          name: "li",
        },
      ]);
      break;
    case "/categories":
      addElement(breadcrumbs, [
        {
          name: "a",
          href: "/",
          style: {
            textDecoration: "underline",
            color: "#337ab7",
          },
          createTextNode: "Home",
        },
        { name: "li" },
      ]);

      addElement(breadcrumbs, [{ name: "span", createTextNode: "/" }]);

      addElement(breadcrumbs, [
        {
          name: "a",
          createTextNode: "Categories",
        },
        {
          name: "li",
        },
      ]);
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
