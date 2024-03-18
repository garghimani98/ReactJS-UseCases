import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom';

import Navbar from './components/Navbar.js'
import Home from './Routes-components/Home.js';
import About from './Routes-components/About.js';
import Blog from './Routes-components/Blog.js';

import { ThemeProvider } from './contexts/theme-context.js';



function App() {
  return (
    
    <ThemeProvider>
      <BrowserRouter>
      
            <Navbar/>
            <Routes>
              <Route path="/"  element={<Home/>}/>
              <Route path="/about"  element={<About/>}/>
              <Route path="/blog"  element={<Blog/>}/>
            </Routes>

            

     
      </BrowserRouter>
  </ThemeProvider>
  )
    
  
}

export default App;
