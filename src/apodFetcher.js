import 'whatwg-fetch';

export default function getNASAData(url) {
  return window.fetch(url).then(res => res.json());
}
