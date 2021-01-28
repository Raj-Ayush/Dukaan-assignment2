import React from 'react'
import './style.css';
import { Form, FormControl,  Navbar } from 'react-bootstrap'

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
        <>
        <div className="navbar-row">
            <Navbar expand="sm" className="nav" >
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="./images/shopimg.png"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                />{'   '}
                    <span className="br-name" style={{fontSize: "25px"}}>Mano Super Market and the name
                    </span>
                </Navbar.Brand>
                <Form className="searchbarcontroller">
                    <FormControl type="text" placeholder="Search for products" className="searchbar" />
                </Form>
                <a className="bag" href="/" >
                    <img src="./images/Bag.svg"  alt="bag"/>
                </a>
                <div className="right-pos">
                    <span>Bag</span>
                    <div class="drop-down">
                        <button class="dropbtn">
                            <img src="./images/options.svg"  alt="dropdown" className="dropdown"/>
                        </button>
                    </div>
                    <div className="ordername">orders</div>
                </div> 
            </Navbar>
        </div>     
        </>
   )

 }

export default Layout