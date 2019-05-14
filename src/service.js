import axios from 'axios';

export async function upload(str) {
  const response = await axios({
    method: 'POST',
    url: 'https://api.myjson.com/bins',
    data: {
      img: str
    },
  });

  return response.data.uri;
}

export async function download(uri) {
  const response = await axios.get(uri);
  return response.data.img;
}
