"use strict";

export function convertFormDataToJSON(formData) {
  let json = {};
  for (let key of formData.keys()) {
    json[key] = formData.get(key);
  }
  return JSON.stringify(json);
}
