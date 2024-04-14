
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import ReviewCard from './Components/ReviewCard/ReviewCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Products/>
      <ReviewCard/>
    </div>
  );
}

export default App;
