import { useState } from 'react';
import './App.css';

function App() {
  const [display,setDisplay] = useState("0")

  const HandleNumber = (event) => {
      const number = event.target.textContent;
      if(display === "0"){
        setDisplay(number);
      }else{
        setDisplay(display + number)
      }
  }

  const HandleOpretor = (event)=>{
    const opretor = event.target.textContent;
    setDisplay(display+' '+ opretor+' ');
  }

  const handleClear = () =>{
    setDisplay('0')
  }

  const handleEquals = () => {
      setDisplay(eval(display));
  }

  const handleDecimal= () => {
    const array = display.split(' ');
    const theLastElement = array[array.length - 1];
    if(!theLastElement.includes('.') && typeof parseInt(theLastElement) === 'number'){
      setDisplay(display+'.')
    }
  }
  return (
    <div className="App">
      <div className='container'>
          <div className='display' id="display"> {display} </div>
       <table className="table mt-3 mb-3 table-responsive" >
        <tbody>
  <tr>
      <th  colSpan={2} className="clear" onClick={handleClear} id="clear">AC</th>
      <th  className="num" id="subtract" onClick={HandleOpretor}>/</th>
      <th  className="num" id="multiply" onClick={HandleOpretor}>*</th>
    </tr>
  <tr>
      <th  className="num" id="seven" onClick={HandleNumber}>7</th>
      <td  className="num"  onClick={HandleNumber}id="eight">8</td>
      <td  className="num" id="nine" onClick={HandleNumber}>9</td>
      <td  className="num" id="divide" onClick={HandleOpretor}>-</td>
    </tr>
  <tr>
      <th  className="num"  id="four" onClick={HandleNumber}>4</th>
      <td  className="num" id="five" onClick={HandleNumber}>5</td>
      <td  className="num" id="six" onClick={HandleNumber}>6</td>
      <td  className="num" id="add" onClick={HandleOpretor}>+</td>
    </tr>
  <tr>
      <th  className="num"  id="one" onClick={HandleNumber}>1</th>
      <td  className="num"  id="two" onClick={HandleNumber}>2</td>
      <td  className="num" id="three" onClick={HandleNumber}>3</td>
      <td  className="equal"  rowSpan={4} id="equals" onClick={handleEquals}>=</td>
    </tr>
  <tr>
      <th  className="num" colSpan={2} id="zero" onClick={HandleNumber}>0</th>
      <td  className="num"  id="decimal" onClick={handleDecimal}>.</td>
    </tr>
    </tbody>
</table>
      </div>

    </div>
  );
}

export default App;
