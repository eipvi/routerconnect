import { BrowserRouter, Routes, Route } from 'react-router-dom';

//sass Navigate
import '/src/ui/sass/app.scss';

//pages
import Home from './ui/pages/Home/Home.jsx';
import About from './ui/pages/About/About.jsx';
import Login from './ui/pages/Login/Login.jsx';
import Navbar from './ui/components/navbar/Navbar.jsx';
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
      <Route path='/login' element={<Login />} />
    </Routes>
    </div>
    <Footer />
       </BrowserRouter>
    </div>
  )
}

export default App

