import React, { useState, useEffect } from "react";
import TourCard from "./TourCard";

function Gallery({ tours, setTours, removeTour }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
        setLoading(true);
        fetch("/api/react-tours-project") // using the proxy path
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch tours");
        }
        return response.json();
      })
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }
    if (error) {
        return <div className="error">Error: {error}</div>;
    }
    if (tours.length === 0) {
        return <div className="no-tours">No tours available</div>;
    }

  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard 
        key={tour.id} 
        {...tour} 
        onRemove={removeTour} />
      ))}
    </div>
  );
}
export default Gallery;

// Loading and Error States already displayed while initially doing Tour List Component using Copilot