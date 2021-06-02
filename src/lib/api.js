import axios from "axios";

const url = "https://api.artic.edu";



export async function getArtistId(input) {
  const response = await axios.get(
    `http://flask-hackathon.herokuapp.com/artist?name=${input}`,
    {
      mode: "cors"
    },
  );
  return response.data;
}

export async function getArtistsCreations(artistId) {
  const response = await axios.get(`${url}/api/v1/agents/${artistId}`,
  );
  return response.data;
}

export async function getArtworkById(artId) {
  const response = await axios.get(
    `${url}/api/v1/artworks/${artId}?fields=id,title,image_id`
  );
  return response.data;
}

export async function getPictureParams(artId) {
  const response = await axios.get(`https://www.artic.edu/iiif/2/${artId}`)
  return response.data
}

export async function getEstimatePrice(width, height, year, brightness, ratioUniqueColors, thresholdBlackPerc, highbrightnessPerc, lowbrightnessPerc, cornerPer, edgePer, faceCount) {
  const response = await axios.get(`https://flask-hackathon.herokuapp.com/predict?famous=1&year=${year}&height=${height}&width=${width}&brightness=${brightness}&ratioUniqueColors=${ratioUniqueColors}&thresholdBlackPerc=${thresholdBlackPerc}&highbrightnessPerc=${highbrightnessPerc}&lowbrightnessPerc=${lowbrightnessPerc}&CornerPer=${cornerPer}&EdgePer=${edgePer}&FaceCount=${faceCount}&soldtime=2021`);
  return response.data;
}

export async function getPictureUrl(picId) {
  const response = await axios.get(
    `https://www.artic.edu/iiif/2/${picId}/full/843,/0/default.jpg`
  );
  return response.data;
}

export async function getYearofCreation(picId) {
  const response = await axios.get(
    `https://api.artic.edu/api/v1/artworks/${picId}`
  )
  return response.data
}
