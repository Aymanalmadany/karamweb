import { BrowserRouter as Router, Switch, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Product from './Pages/Product';
import About from './Pages/About';

function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Switch>
          <Route path='/about' >
            <About/>
          </Route>
          <Route path='/product' >
            <Product/>
          </Route>
          <Route path='/' >
            <Home/>
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;



