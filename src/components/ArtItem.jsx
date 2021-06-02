import React, { useEffect, useState } from "react";
import "../CSS/ArtItem.css";
import {getArtworkById, getPictureParams, getYearofCreation, getEstimatePrice} from '../lib/api'

function ArtItem(props) {
  const [picture, setPicture] = useState(props.art)
  const [picURL, setPicURL] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')

  function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
} 

  const getPicture = async () => {
    const response = await getArtworkById(picture)
    setTitle(response.data.title)
    const response2 = await getPictureParams(response.data.image_id)
    setPicURL(`https://www.artic.edu/iiif/2/${response.data.image_id}/full/843,/0/default.jpg`)
    const response3 = await getYearofCreation(picture)
    const year = response3.data.date_start
    const brightness = randomNumber(7, 252)
    const ratioUniqueColors = randomNumber(0, 0.9)
    const thresholdBlackPerc = randomNumber(0, 100)
    const highbrightnessPerc = randomNumber(0, 40.1)
    const lowbrightnessPerc = randomNumber(0, 85.21)
    const cornerPer = randomNumber(0, 22.93)
    const edgePer = randomNumber(0, 37.05)
    const faceCount = randomNumber(0, 11)
    const width = response2.sizes[1].width
    const height = response2.sizes[1].height
    const response4 = await getEstimatePrice(width, height, year, brightness, ratioUniqueColors, thresholdBlackPerc, highbrightnessPerc, lowbrightnessPerc, cornerPer, edgePer, faceCount)
    setPrice(response4.toFixed(0))
  }

  useEffect(() => {
    getPicture()
  }, [])

  return (
    <div>
      <div className="card">
        <img
          src={picURL}
          alt="Avatar"
        />
        <div className="container">
          <h4>
            <b className="pictureName">{title}</b>
          </h4>
          <p className="price">{price} $</p>
        </div>
      </div>
    </div>
  );
}

export default ArtItem;
