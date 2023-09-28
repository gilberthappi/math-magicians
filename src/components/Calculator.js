import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="output">0</div>
        <div className="calculatorBtns">
          <button className="acBtn gray" type="button">AC</button>
          <button className="plusMinusBtn gray" type="button">+/-</button>
          <button className="PercentageBtn gray" type="button">%</button>
          <button className="operatorBtn" type="button">+</button>
          <button className="digitBtn" type="button">7</button>
          <button className="digitBtn" type="button">8</button>
          <button className="digitBtn" type="button">9</button>
          <button className="operatorBtn" type="button">x</button>
          <button className="digitBtn" type="button">4</button>
          <button className="digitBtn" type="button">5</button>
          <button className="digitBtn" type="button">6</button>
          <button className="operatorBtn" type="button">-</button>
          <button className="digitBtn" type="button">1</button>
          <button className="digitBtn" type="button">2</button>
          <button className="digitBtn" type="button">3</button>
          <button className="operatorBtn" type="button">+</button>
          <button className="digitBtn span2" type="button">0</button>
          <button className="digitBtn" type="button">.</button>
          <button className="evaluationBtn" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
