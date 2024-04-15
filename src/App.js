
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import Review from './Components/Review/Review';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Products/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
