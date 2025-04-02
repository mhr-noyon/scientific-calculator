import React, { useState } from 'react'
const Calc = () => {
  const btns = ['C', '(', ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']
  const [displayVal, setDisplayVal] = useState('0');
  const btnHandler = (e) => {
    const val = e.target.textContent;
    if (val === '=') {
      let result = calcHandler();
      if (result === null) {
        alert("Error in input!");
        result = 0;
      }
      setDisplayVal(result.toString());
      return;
    }
    let temp;
    if (val === 'C') {
      temp = displayVal.substring(0, displayVal.length - 1);
      if (temp === '') temp = '0';
    }
    else if (displayVal === '0') {
      temp = val;
    }
    else {
      temp = displayVal + val;
    }
    setDisplayVal(temp);
  }

  const isDigit = (ch) => {
    return ch >= '0' && ch <= '9';
  }

  const calcHandler = () => {
    let text = displayVal;
    console.log(text);

    let ans = 0;
    let stack = [], isDecimal = false, num = 0, posDec = 10;
    for (let ch of text) {
      console.log(ch);
      if (isDigit(ch)) {
        if (isDecimal) {
          num += ((ch - '0') / posDec);
          posDec *= 10;
        }
        else {
          num = (num * 10) + (ch - '0');
        }
        // console.log("Num: ", num);
        // console.log("char: ", ch);
        // console.log("sub: ", (ch - '0'));
      }
      else {
        // console.log("The number was: ", num);
        if (ch === '+') {

        }
        else if (ch === '-') {

        }
        else if (ch === '*') {

        }
        else if (ch === '/') {

        }
        if (ch === '.') {
          if (isDecimal) {
            return null;
          }
          isDecimal = true;
        }
        else {
          num = 0;
          posDec = 10;
          isDecimal = false;
        }
      }
    }
    return ans;
  }
  return (
    <div className='calc'>
      <div className="calc-display">{displayVal}</div>
      <div className='calc-body'>
        {btns.map((btn) => {
          // console.log(btn);
          return <button key={'btn' + btn} className='calc-btn' onClick={btnHandler}>{btn}</button>
        })}
      </div>
    </div>
  )
}

export default Calc
