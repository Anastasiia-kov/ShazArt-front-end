import axios from "axios";

const url = "https://www.api.artic.edu";



export async function getArtistId(input) {
  const response = await axios.get(
    `http://172.16.1.72:5000/artist?name=${input}`,
  {
    mode: "cors"
  },
  );
  return response.data;
}

export async function getArtistsCreations(artistId) {
  const response = await axios.get(`${url}/api/v1/agents/${artistId}`,
  {
    'Access-Control-Allow-Origin': "*"
  }
  );
  return response.data;
}

export async function getArtworkById(artId) {
  const response = await axios.get(
    `${url}/api/v1/artworks/${artId}?fields=id,title,image_id`
  );
  return response.data;
}

export async function getEstimatePrice(width, height) {
  const response = await axios.get(url + `${(width, height)}`);
  return response.data;
}

export async function getPictureUrl(picId) {
  const response = await axios.get(
    `${url}/iiif/2/${picId}/full/843,/0/default.jpg`
  );
  return response.data;
}
