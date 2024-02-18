import { BrowserRouter, Routes, Route } from 'react-router-dom';

//sass Navigate
import '/src/ui/sass/app.scss';

//pages
import Home from './ui/pages/Home/Home';
import About from './ui/pages/About/About';
import Navbar from './ui/components/navbar/Navbar';
import Footer from './ui/components/Footer/Footer.jsx';


function App() {

  return (
    <div className='App'>
     <BrowserRouter>
     <Navbar />
    <div className='container'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </div>
    <Footer />
       </BrowserRouter>
    </div>
  )
}

export default App

