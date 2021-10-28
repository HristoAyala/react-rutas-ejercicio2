import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import './style.scss'

const Header = () => {
  return (
    <Router>
      <div className="l_header__wrapper">
        <div className="l_header__logo">
          <img src="http://assets.stickpng.com/images/58428ba1a6515b1e0ad75ab0.png" alt="" />
        </div>
        <div className="l_header_menu">
          <div>
            <Link to="/home">Home</Link>
          </div>
          <div>
            <Link to="/hero">Hero</Link>
          </div>
          <div>
            <Link to="/home">Otros</Link>
          </div>
          <div>
            <Link to="/otro1">Link1</Link>
          </div>
          <div>
            <Link to="/otro2">link2</Link>
          </div>
        </div>
      </div>
      
          
    </Router>    
  )
}

export default Header
