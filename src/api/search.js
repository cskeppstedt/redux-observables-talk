import qs from "qs";
import { Observable } from "rxjs";

const adaptResponse = ajaxResponse =>
  ajaxResponse.response && ajaxResponse.response.total_jokes > 0
    ? {
        found: true,
        joke: ajaxResponse.response.results[0].joke
      }
    : {
        found: false,
        joke: ""
      };

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
  })
    .map(adaptResponse)
