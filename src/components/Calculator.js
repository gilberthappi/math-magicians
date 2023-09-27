import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickHandler = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="container">
        <div className="output" id="output">
          {total && total}
          {operation && operation}
          {next && next}
        </div>
        <div className="calculatorBtns">
          <button className="acBtn gray" type="button" onClick={this.clickHandler}>AC</button>
          <button className="plusMinusBtn gray" type="button" onClick={this.clickHandler}>+/-</button>
          <button className="PercentageBtn gray" type="button" onClick={this.clickHandler}>%</button>
          <button className="operatorBtn" type="button" onClick={this.clickHandler}>÷</button>
          <button className="digitBtn" type="button" onClick={this.clickHandler}>7</button>
          <button className="digitBtn" type="button" onClick={this.clickHandler}>8</button>
          <button className="digitBtn" type="button" onClick={this.clickHandler}>9</button>
          <button className="operatorBtn" type="button" onClick={this.clickHandler}>x</button>
          <button className="digitBtn" type="button" onClick={this.clickHandler}>4</button>
          <button className="digitBtn" type="button" onClick={this.clickHandler}>5</button>
          <button className="digitBtn" type="button" onClick={this.clickHandler}>6</button>
          <button className="operatorBtn" type="button" onClick={this.clickHandler}>-</button>
          <button className="digitBtn" type="button" onClick={this.clickHandler}>1</button>
          <button className="digitBtn" type="button" onClick={this.clickHandler}>2</button>
          <button className="digitBtn" type="button" onClick={this.clickHandler}>3</button>
          <button className="operatorBtn" type="button" onClick={this.clickHandler}>+</button>
          <button className="digitBtn span2" type="button" onClick={this.clickHandler}>0</button>
          <button className="digitBtn" type="button" onClick={this.clickHandler}>.</button>
          <button className="evaluationBtn" type="button" onClick={this.clickHandler}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
