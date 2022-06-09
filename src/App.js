import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Heading from './components/Header/Heading';
import Home from './components/Home/Home';
import MyProjects from './components/MyProjects/MyProjects';
import Footer from './shared/Footer/Footer';

function App() {
  return (
    <div className='bg-dark text-white'>
      <Heading></Heading>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
