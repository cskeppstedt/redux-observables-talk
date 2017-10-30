import qs from "qs";
import { Observable } from "rxjs";

export default term =>
  Observable.ajax({
    crossDomain: true,
    method: "GET",
    url: `https://icanhazdadjoke.com/search?${qs.stringify({
      term
    })}`,
    headers: {
      Accept: "application/json"
    }
  }).map(ajaxResponse => ajaxResponse.response);
