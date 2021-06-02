import React from "react";
import "../CSS/PainterPage.css";
import ArtItem from "./ArtItem.jsx";

function PainterPage() {
  return (
    <div>
      <h2 className="center">Artist Name</h2>
      <div className="cards-holder">
        <ArtItem />
      </div>
    </div>
  );
}

export default PainterPage;
