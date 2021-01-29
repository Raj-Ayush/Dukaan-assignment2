import { Button } from 'react-bootstrap'
import React from 'react'
import "./style.css"


/**
* @author
* @function Bestselleroption
**/

const Bestselleroption = (props) => {
  return(
    <div className="leftcomponent">
       <Button variant="light" id="leftbtn">Bestsellers (10)</Button>
       <Button variant="light" id="leftbtn">Pizza Specials (21)</Button>
       <Button variant="light" id="leftbtn">Singles Value Combos (311)</Button>
       <Button variant="light" id="leftbtn">Match Combos (191)</Button>
       <Button variant="light" id="leftbtn">Pastas by Firangi Bake (31)</Button>
       <Button variant="light" id="leftbtn">Midnight Sale (59)</Button>
       <p className="categories"> View all categories<img src="./images/arrow.svg" alt="arrow-img"/> </p>
    </div>
   )

 }

export default Bestselleroption