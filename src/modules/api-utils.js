export const getData = (url) => fetch(url).then((res) => res.json());

export const sendData = (url, data) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify(data),
});
