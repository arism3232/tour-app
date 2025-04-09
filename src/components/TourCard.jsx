import { useState } from "react";

function TourCard({ id, name, info, image, price, onRemove }) {
    const [showFullInfo, setShowFullInfo] = useState(false);

    const displayedInfo = showFullInfo ? info : `${info.substring(0, 200)}...`;

    return (
        <div className="tour-card">
            <img src={image} alt={name} className="tour-image"/>
            <div className="tour-content">
                <div className="tour-header">
                    <h2>{name}</h2>
                    <span className="tour-price">${price}</span>
                </div>
                <p>
                    {displayedInfo}
                    <button 
                    className="toggle-btn"
                    onClick={() => setShowFullInfo(!showFullInfo)}>
                        {showFullInfo ? "Show Less" : "Show More"}
                    </button>
                </p>
                <button className="remove-btn" onClick={() => onRemove(id)}>
                    Not Interested
                </button>
            </div>
        </div>
    );
}
export default TourCard;