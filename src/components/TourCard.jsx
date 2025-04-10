import { useState } from "react";

function TourCard({ id, name, info, image, price, onRemove }) { // defining TourCard component
    const [showFullInfo, setShowFullInfo] = useState(false); // setting track for full info which is initially false

    const displayedInfo = showFullInfo ? info : `${info.substring(0, 200)}...`; // determining what info to display and limiting length if showFullInfo is false

    return (
        <div className="tour-card">
            <img src={image} alt={name} className="tour-image"/> {/* displaying tour image */}
            <div className="tour-content"> {/* displaying tour content */}
                <div className="tour-header">
                    <h2>{name}</h2>
                    <span className="tour-price">${price}</span>
                </div>
                <p>
                    {displayedInfo}
                    <button // displaying button to toggle full info
                    className="toggle-btn"
                    onClick={() => setShowFullInfo(!showFullInfo)}>
                        {showFullInfo ? "Show Less" : "Show More"}
                    </button>
                </p>
                <button className="remove-btn" onClick={() => onRemove(id)}> {/* displaying button to remove tour which calls onRemove with Tour's ID */}
                    Not Interested
                </button>
            </div>
        </div>
    );
}
export default TourCard;