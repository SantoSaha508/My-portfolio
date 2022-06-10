import { Route, Routes } from 'react-router-dom';
import './App.css';
import Heading from './components/Header/Heading';
import Home from './components/Home/Home';
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
