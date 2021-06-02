import React, { useEffect, useState } from "react";
import "../CSS/PainterPage.css";
import ArtList from "./ArtList.jsx";
import {getArtistsCreations} from '../lib/api'

const mokPictures = [
  353453, 4535345, 345435345,
]

function PainterPage(props) {
  const [picturesId, setPicturesId] = useState([])

  const getArtistWorkd = async () => {
    const data = await getArtistsCreations(props.artistId)
    setPicturesId(data.data.artwork_ids.slice(11, 16))
  }

  useEffect(() => {
    getArtistWorkd()
  }, [])
  return (
    <div>
      <h2 className="center">{props.artistName}</h2>
      <div className="cards-holder">
        <ArtList artsId={picturesId}/>
      </div>
    </div>
  );
}

export default PainterPage;
