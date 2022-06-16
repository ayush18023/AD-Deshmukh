import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom'
import { Navbar } from './Navbar/Navbar';
import Slider from './Slider/Slider';
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' element={<><Home/></>}></Route>
        
      </Switch>
    </Router>
    
  );
}

export default App;
