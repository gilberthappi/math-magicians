// Calculator.js
import React from 'react';
import calculate from '../logic/calculate';
import Button from './Button'; // Assuming Button.js is in the same directory as Calculator.js

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
          {/* Use the Button component for each button */}
          <Button className="acBtn gray" label="AC" onClick={this.clickHandler} />
          <Button className="plusMinusBtn gray" label="+/-" onClick={this.clickHandler} />
          <Button className="PercentageBtn gray" label="%" onClick={this.clickHandler} />
          <Button className="operatorBtn" label="÷" onClick={this.clickHandler} />
          <Button className="digitBtn" label="7" onClick={this.clickHandler} />
          <Button className="digitBtn" label="8" onClick={this.clickHandler} />
          <Button className="digitBtn" label="9" onClick={this.clickHandler} />
          <Button className="operatorBtn" label="x" onClick={this.clickHandler} />
          <Button className="digitBtn" label="4" onClick={this.clickHandler} />
          <Button className="digitBtn" label="5" onClick={this.clickHandler} />
          <Button className="digitBtn" label="6" onClick={this.clickHandler} />
          <Button className="operatorBtn" label="-" onClick={this.clickHandler} />
          <Button className="digitBtn" label="1" onClick={this.clickHandler} />
          <Button className="digitBtn" label="2" onClick={this.clickHandler} />
          <Button className="digitBtn" label="3" onClick={this.clickHandler} />
          <Button className="operatorBtn" label="+" onClick={this.clickHandler} />
          <Button className="digitBtn span2" label="0" onClick={this.clickHandler} />
          <Button className="digitBtn" label="." onClick={this.clickHandler} />
          <Button className="evaluationBtn" label="=" onClick={this.clickHandler} />
        </div>
      </div>
    );
  }
}

export default Calculator;
