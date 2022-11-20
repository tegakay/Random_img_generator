import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Categories from './components/Categories';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path ="/categories" element={<Categories/>} />
        
  
      </Routes>
    </div>
  </Router>
        );
}

export default App;
