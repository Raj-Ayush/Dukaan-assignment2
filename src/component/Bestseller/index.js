import React, { useState } from 'react'
import { iceCream } from './../Data/iceCreams';
import './style.css';
import { Button, ButtonGroup } from 'react-bootstrap';


/**
* @author
* @function Bestseller
**/

const Bestseller = (props) => {
  const [count, setCount] = useState(new Array(iceCream.length+1).fill(0));
  const addnumber =(value)=>{
      const temp = count;
      temp[value]= temp[value]+1;
      setCount([...temp]);
  }
  const decreaseNumber =(value)=>{
    const temp = count;
    temp[value]= temp[value]-1;
    setCount([...temp]);
    console.log(count);
  }
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
                  {count[item.id] === 0? null: 
                  <Button variant="light" onClick={() => decreaseNumber(item.id)}>-</Button>
                  }
                  <Button  variant="light" id="add">
                    {count[item.id]===0?
                  "Add":
                  count[item.id]}
                  </Button> <Button variant="light" onClick={() => addnumber(item.id)}>+</Button>
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