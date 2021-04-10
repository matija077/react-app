import React from 'react';
import {
    Link
  } from "react-router-dom";

//assets
import logo from './assets/logo.png';


const Navigation = () => {
     return (
    <nav>
    
      <ul>   
          
              <Link id='logo' to="/"><img src={logo} alt='Logo'/></Link>   
         
          <li>
              <Link to='/articles'>Articles</Link>
          </li>
          <li>
              <Link to='/tutorials'>Tutorials</Link>
          </li>
          <li>
              <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
              <Link to='/about'>About</Link>
          </li>
      </ul>
    </nav> 
      
     )
}

export default Navigation

/* custom navigation bar

      <nav>
          <ul>
              <li>
                  <Link to='/'>Home</Link>
              </li>
              <li>
                  <Link to='/articles'>Articles</Link>
              </li>
              <li>
                  <Link to='/tutorials'>Tutorials</Link>
              </li>
              <li>
                  <Link to='/about'>About</Link>
              </li>
          </ul>
        </nav> 

*/

/* inline style
<Link to='/' style={{ color: '#181717' }}>Home</Link>
*/