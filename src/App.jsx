import { BrowserRouter, Routes, Route} from 'react-router-dom';

//sass
import '/src/ui/sass/app.scss';

//pages
import Home from './ui/pages/Home/Home';
import About from './ui/pages/About/About';


function App() {

  return (
    <div className='App'>
     <BrowserRouter>
    <div className='container'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </div>
       </BrowserRouter>
    </div>
  )
}

export default App

// , Navigate 