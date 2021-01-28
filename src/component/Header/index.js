import React from 'react';
import './style.css'


/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <div className="header">
        <div className="sharename">
            <p>
                Share made with
                <img src="./images/download.svg" alt="dukaan img" />
            </p>
        </div>
        <div id="head">
            <span><h5>DOWNLOAD APP</h5></span>
        </div>
    </div>
   )

 }

export default Header