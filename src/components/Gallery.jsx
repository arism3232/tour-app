import React, { useState, useEffect } from "react"; // importing React and hooks
import TourCard from "./TourCard"; // importing TourCard component to display each tour

function Gallery({ tours, setTours, removeTour }) {
  const [loading, setLoading] = useState(true); // loading state to track status
  const [error, setError] = useState(null); // storing error messages if fetch fails

  useEffect(() => {
        setLoading(true);
        fetch("/api/react-tours-project") // using the proxy path
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch tours"); // throw error if response is not ok
        }
        return response.json();
      })
      .then((data) => {
        setTours(data); // updating tours state with fetched data
        setLoading(false); // setting loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Fetch error:", error); // logging error for debugging
        setError(error.message); // setting error meessage to display
        setLoading(false); // setting loading to false after error
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>; // displaying message while fetching data
  }
    if (error) {
        return <div className="error">Error: {error}</div>; // displaying error message if fetch fails
    }
    if (tours.length === 0) {
        return <div className="no-tours">No tours available</div>; // displaying message if no tours are available
    }

  return ( // rendering the list of tours
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard 
        key={tour.id} // unique key for each tour
        {...tour} // spreading tour properties
        onRemove={removeTour} /> // passing removeTour function as prop
      ))}
    </div>
  );
}
export default Gallery;

// Loading and Error States already displayed while initially doing Tour List Component using Copilot