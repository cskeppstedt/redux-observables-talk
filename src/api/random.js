import { Observable } from "rxjs";

export default () =>
  Observable.ajax({
    crossDomain: true,
    method: "GET",
    url: "https://icanhazdadjoke.com",
    headers: {
      Accept: "application/json"
    }
  }).map(ajaxResponse => ajaxResponse.response);
