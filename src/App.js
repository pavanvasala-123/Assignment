
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import Review from './Components/Review/Review';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Products/>
      <Review/>
    </div>
  );
}

export default App;
