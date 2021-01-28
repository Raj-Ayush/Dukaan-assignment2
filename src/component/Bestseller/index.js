import React from 'react'
import { iceCream } from './../Data/iceCreams';
import './style.css';
import { Button, ButtonGroup } from 'react-bootstrap';


/**
* @author
* @function Bestseller
**/

const Bestseller = (props) => {
  const creamList= iceCream.map((item)=>
            <div className="card" key={item.id}> 
              <div className="cardbody">
                <div className="card-image">
                  <img src={item.img} alt="productimg" />
                </div>
                <div className="body">
                  <div className="card-title">
                    <p>{item.iceCreamName}</p>
                  </div>
                  <div className="card-unit">
                    <p>{item.unit}</p>
                  </div>
                  <div className="card-price">
                    <p>{item.currency+ item.offer_Price}</p>
                    <div className="exact_price">
                      {item.offer_Price === item.Exact_price? 
                          null
                          :    
                              item.currency+item.Exact_price
                          
                      }
                    </div>
                  </div>
                </div>
                <ButtonGroup className="AddtoCart mr-2" aria-label="Second group">
                  <Button variant="light">-</Button> <Button disable variant="light">Add</Button> <Button variant="light">+</Button>
              </ButtonGroup>
              </div>  
            </div>
  )

  return(
    <div className="bestseller">
      <h3 className="heading">Ice Creams <span className="quantity">{iceCream.length}</span></h3>
      {creamList}
    </div>
      )

  }

export default Bestseller