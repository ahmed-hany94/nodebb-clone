"use strict";

import { convertFormDataToJSON } from "./helpers.js";

export async function registerHandle(event, registerForm) {
  try {
    event.preventDefault();

    let formData = new FormData(registerForm);
    //   formData.append("username", username.value);
    //   if (password.value === confirmPassword.value) {
    //     formData.append("password", password.value);
    //   }

    let formDataJSON = await convertFormDataToJSON(formData);
    //   console.log(Array.from(formData));

    let response = await fetch("http://localhost:6969/api/register", {
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

    return response.json();
  } catch (err) {
    console.log(err);
  }
}
