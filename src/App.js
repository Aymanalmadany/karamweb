import { BrowserRouter as Router, Switch, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import Product from './Product';
import About from './About';

function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/about'  element={<About/>}/>
            <Route exact path='/product'  element={<Product/>}/>
            <Route exact path='/'  element={<Home/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
