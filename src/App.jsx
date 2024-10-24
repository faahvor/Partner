import './index.css';
import Footer from './pages/Footer';
import Goal from './pages/Goal';
import Hero from './pages/Hero';
import Navbar from './pages/Navbar'
import Reason from './pages/Reason';
import Registration from './pages/Registration';
import Speaker from './pages/Speaker';
import Time from './pages/Time';

function App() {
 

  return (
    <>
      <Navbar />
      <Hero />
      <Goal/>
      <Registration/>
      <Time/>
      <Speaker/>
      <Reason/>
      <Footer/>
    </>
  )
}

export default App
