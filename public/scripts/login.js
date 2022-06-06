"use strict";

import { convertFormDataToJSON } from "./helpers.js";

export async function loginHandle(event, loginForm) {
  try {
    event.preventDefault();

    let formData = new FormData(loginForm);

    let formDataJSON = await convertFormDataToJSON(formData);
    // console.log(Array.from(formData));

    let response = await fetch("http://localhost:6969/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: formDataJSON,
    });

    if (response.status != 200) {
      throw new Error("Bad Server Response");
    }

    let { token, user } = await response.json();

    // TODO: handle storing token

    return true;
  } catch (err) {
    console.log(err);
  }
}
