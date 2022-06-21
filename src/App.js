import { Route, Routes } from 'react-router-dom';
import './App.css';
import Heading from './components/Header/Heading';
import Home from './components/Home/Home';
import ColorsDetail from './components/MyProjects/ColorsDetail';
import PhotographyDetail from './components/MyProjects/PhotographyDetail';
import ProjectDetails from './components/MyProjects/ProjectDetails';
import Blog from './pages/Blog/Blog';
import Footer from './shared/Footer/Footer';

function App() {
  return (
    <div className='bg-dark text-white'>
      <Heading></Heading>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/colorDetail' element={<ColorsDetail></ColorsDetail>}>
        </Route>
        <Route path='/warehouseDetail' element={<ProjectDetails></ProjectDetails>}>
        </Route>
        <Route path='/photography' element={<PhotographyDetail></PhotographyDetail>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
