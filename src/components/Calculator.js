import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({});

  const clickHandler = (e) => {
    const result = calculate(state, e.target.textContent);
    setState(result);
  };

  const { total, next, operation } = state;

  return (
    <div className="container">
      <div className="wraper">
        <div className="output" data-testid="output">
          {total && total}
          {operation && operation}
          {next && next}
        </div>
        <div className="calculatorBtns">
          <button className="acBtn gray" type="button" onClick={clickHandler}>AC</button>
          <button className="plusMinusBtn gray" type="button" onClick={clickHandler}>+/-</button>
          <button className="PercentageBtn gray" type="button" onClick={clickHandler}>%</button>
          <button className="operatorBtn" type="button" onClick={clickHandler}>÷</button>
          <button className="digitBtn" type="button" onClick={clickHandler}>7</button>
          <button className="digitBtn" type="button" onClick={clickHandler}>8</button>
          <button className="digitBtn" type="button" onClick={clickHandler}>9</button>
          <button className="operatorBtn" type="button" onClick={clickHandler}>x</button>
          <button className="digitBtn" type="button" onClick={clickHandler}>4</button>
          <button className="digitBtn" type="button" onClick={clickHandler}>5</button>
          <button className="digitBtn" type="button" onClick={clickHandler}>6</button>
          <button className="operatorBtn" type="button" onClick={clickHandler}>-</button>
          <button className="digitBtn" type="button" onClick={clickHandler}>1</button>
          <button className="digitBtn" type="button" onClick={clickHandler}>2</button>
          <button className="digitBtn" type="button" onClick={clickHandler}>3</button>
          <button className="operatorBtn" type="button" onClick={clickHandler}>+</button>
          <button className="digitBtn span2" type="button" onClick={clickHandler}>0</button>
          <button className="digitBtn" type="button" onClick={clickHandler}>.</button>
          <button className="evaluationBtn" type="button" onClick={clickHandler}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
