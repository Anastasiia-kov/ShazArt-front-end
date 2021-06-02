import React from "react";
import "../CSS/ArtItem.css";

function ArtItem() {
  return (
    <div>
      <div className="card">
        <img
          src="https://www.passion-estampes.com/textile/picasso/tenture-picasso-gueridon.jpg"
          alt="Avatar"
        />
        <div className="container">
          <h4>
            <b className="pictureName">Hackathon sadness</b>
          </h4>
          <p className="price">1,000,000 $</p>
        </div>
      </div>
    </div>
  );
}

export default ArtItem;
