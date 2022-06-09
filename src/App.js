import './App.css';
import Banner from './components/Banner/Banner';
import Heading from './components/Header/Heading';
import MyProjects from './components/MyProjects/MyProjects';
import Footer from './shared/Footer/Footer';

function App() {
  return (
    <div className='bg-dark text-white'>
      <Heading></Heading>
      <Banner></Banner>
      <MyProjects></MyProjects>
      <Footer></Footer>
    </div>
  );
}

export default App;
