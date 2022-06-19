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

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' element={<><Home/></>}></Route>
        <Route path='/men' element={<><Men/></>}></Route>
        <Route exact path='/men/:id' element={<><Menclothes/></>} ></Route>
        
      </Switch>
    </Router>
    
  );
}

export default App;
