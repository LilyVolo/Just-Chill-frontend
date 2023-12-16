import axios from "axios"

export default async function handler(request, response) {
  const apiUrl    = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
  const key       = process.env.VITE_GAPI_KEY;

  console.log(request)

  if(!request.query) {
    return response.status(400).json({
      body: 'Error invalid request'
    })
  }

  return axios.get(apiUrl, {
    params: {...request.query, key: key}
  }).then(res => {
    response.status(200).json({
      body: res,
    });
  }).catch(error => {
    response.status(400).json({
      body: {...request.body, error},
    })
    console.error('Error fetching data:', error);
  });
}