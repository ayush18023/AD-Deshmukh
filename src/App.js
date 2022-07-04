import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom'
import { Navbar } from './Navbar/Navbar';
import Slider from './Slider/Slider';
import Home from './Home/Home';
import Men from './Men/Men';
import Menclothes from './Men/Menclothes';
import ScrollToTop from './Components/ScrollToTop'
import Checkout from './Checkout/Checkout';

function App() {

  return (
      <Router>
      <ScrollToTop>
        <Switch>
          <Route path='/' element={<><Home/></>}></Route>
          <Route path='/men' element={<><Men/></>}></Route>
          <Route exact path='/men/:id' element={<><Menclothes/></>} ></Route>
          <Route exact path='/checkout' element={<><Checkout/></>} ></Route>
          
        </Switch>
      </ScrollToTop>
      </Router>  
  );
}

export default App;
