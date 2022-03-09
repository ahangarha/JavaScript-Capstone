export default function getData(url) {
  return fetch(url).then((res) => res.json());
}

export function sendData(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });
}
