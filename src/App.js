//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from 'react-router-dom';
import Home from './Screens/Home';
import About from './Screens/About';
import Products from './Screens/Products';
import NotFound from './Screens/NotFound';
import Box from './useContext/Box';
import Red from './data/useReducer'
function App() {
  return (
    <Router>
      <nav>
        <h1>This is Header</h1>
        <Link to={'/'}><button>Home</button></Link> | {' '}
        <Link to={'/about'}><button>About</button></Link> | {' '}
        <Link to={'/products'}><button>Products</button></Link> | {' '}
        <Link to={'/context'}><button>Context</button></Link> | {' '}
        <Link to={'/reducer'}><button>Reducer</button></Link><br /> <br />
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/context' element={<Box />} />
        <Route path='/reducer' element={<Red />} />
      </Routes>
      <h2>This is Footer</h2>
    </Router>
  );
}

export default App;
