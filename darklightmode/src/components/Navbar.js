import { Link} from 'react-router-dom'
//import { useContext } from 'react';
import {useTheme} from '../contexts/theme-context';
import '../App.css';

const Navbar=()=>{

    const {theme,toggleTheme}=useTheme();

    return (
            <nav className='navbar'> 
                <div>

                    <Link  to="/">Home</Link>
                    <Link  to="/about">About</Link>
                    <Link  to="/blog">Blog</Link>

                </div>
                <div className='mode-switch'>
                    <label>
                        <input  type="checkbox"  onChange={toggleTheme} checked={theme==="dark"}/>
                        <span className='slider'></span>
                    </label>
                </div>

            </nav>
    )
}


export default Navbar;