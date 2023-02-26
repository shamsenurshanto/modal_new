import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Audi from '../Audi';
import Benz from '../Benz';
import Ferrari from '../Ferrari';
import Hudai from '../Hudai/Hudai';
import './SplitBasicExample.css'


function SplitBasicExample(props) {
   
  const [car, setCar] = useState("The money");

  const [ferrariContentVisible, setFerrariContentVisible] = useState(false);
  const [benzContentVisible, setBenzContentVisible] = useState(false);
  const [audiContentVisible, setAudiContentVisible] = useState(false);
  console.log(props);
  useEffect(() => {
    car === "ferrari"
      ? setFerrariContentVisible(true)
      : setFerrariContentVisible(false);
    car === "benz" ? setBenzContentVisible(true) : setBenzContentVisible(false);
    car === "audi" ? setAudiContentVisible(true) : setAudiContentVisible(false);
  }, [car]);

  const handleOnChange = (e) => {
    setCar(e.target.value);
    console.log(car)
    props.added(car);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    car === "selectDreamCar"
      ? (result = "select your dream car")
      : (result = makeFirstLetterCapital(car));
    return result;
  };
  
  return (
    
      
      <div className='Dd' onClick={handleOnChange}>
      <div className='w-100 dropDown'>
      <select  id="dropdown-split-basic"  className="form-select"  onChange={handleOnChange}>
      
          <option value="LoanTaken">Loan Taken </option>
          <option value="LoanGiven">Loan Given </option>
        
        </select>
      </div>
          

      </div>
      
     
        
    

     
      
    
  );
}

export default SplitBasicExample;