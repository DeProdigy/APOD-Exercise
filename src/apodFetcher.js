import 'whatwg-fetch';

function handleHttpError(res) {
  if (!res.ok) {
    console.error(res);
    throw Error(response.statusText);
  }

  return res;
}

function toJson(res) {
  return res.json();
}

export default function getNASAData(url) {
  return window.fetch(url).then(handleHttpError).then(toJson);
}
