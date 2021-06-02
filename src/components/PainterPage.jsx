import React from "react";
import "../CSS/PainterPage.css";
import ArtList from "./ArtList.jsx";

const mokPictures = [
  353453, 4535345, 345435345,
]

function PainterPage(props) {
  return (
    <div>
      <h2 className="center">{props.artistName}</h2>
      <div className="cards-holder">
        <ArtList artsId={mokPictures}/>
      </div>
    </div>
  );
}

export default PainterPage;
