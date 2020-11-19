import React from "react"
import "./SwipeButtons.css";

function SwipeButtons() {
    
    return (
        <div className="swipeButtonsContainer">
        <div className="swipeButtons">
          <button type="button">
            <img src="rewind.png" alt ="icon" ></img>
          </button>
          <button type="button">
            <img src="dislike.png" alt ="icon" ></img>
          </button>
          <button type="button">
            <img src="superlike.png"  alt ="icon" ></img>
          </button>
          <button type="button">
            <img src="like.png" alt ="icon" ></img>
          </button>
        </div>
      </div>
    );
}

export default SwipeButtons;