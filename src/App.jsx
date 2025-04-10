import React, { useState } from 'react'; // managing list of tours
import Gallery from './components/Gallery'; // importing Gallery component
import './styles/styles.css'; // adding styles

function App() {
  const [tours, setTours] = useState([]); // creating state to store all tours

  const removeTour = (id) => { // adding function to remove tour
    setTours(tours.filter(tour => tour.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Our Tours</h1>
      <Gallery tours={tours} setTours={setTours} removeTour={removeTour} /> {/* passing props to Gallery component */}
    </div>
  );
}
export default App;