import { useState, useEffect } from "react";
import TourCard from "./TourCard";

function Gallery({ tours, setTours, removeTour }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project");
        if (!response.ok) {
          throw new Error("Failed to fetch tours");   
        }
        const data = await response.json();
        setTours(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [setTours]);

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