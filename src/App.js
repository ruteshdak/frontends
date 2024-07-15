//import logo from './logo.svg';
//import Card from './Components/Cards';
import './App.css';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search/>
      <Cards/>
    </div>
  );
}

export default App;
