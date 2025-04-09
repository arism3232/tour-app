import { useState } from 'react';
import Gallery from './components/Gallery';
import './styles/styles.css';

function App() {
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Our Tours</h1>
      <Gallery tours={tours} setTours={setTours} removeTour={removeTour} />
    </div>
  );
}
export default App;