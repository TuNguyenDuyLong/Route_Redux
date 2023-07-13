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
import NotFound from './Screens/NotFound'
function App() {
  return (
    <Router>
      <nav>
        <h1>This is Header</h1>
        <Link to={'/'}>Home</Link> | {' '}
        <Link to={'/about'}>About</Link> | {' '}
        <Link to={'/products'}>Products</Link><br /> <br />
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <h1>This is Footer</h1>
    </Router>
  );
}

export default App;
