import React from 'react'
import Layout from '../Layout';
import Bestselleroption from '../Bestsellersoption';
import './style.css';
import Bestseller from '../Bestseller';
import Cart from './../Cart';
import Footer from './../Footer/index';
import Header from './../Header/index';

/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <div className="home">
        <Header />
        <Layout />
        <div className="column">
            <div id="col" className="left">
                <Bestselleroption />
            </div>
            <div id="col" className="middle">
                <Bestseller />
            </div>
            <div id="col" className="right">
                <Cart />
            </div>
        </div>
        <Footer />
        
    </div>
   )

 }

export default Home