import React from "react";
import "./Dice.css";
class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rolling: false
    };
  }
  componentDidMount() {
    this.setState({ rolling: this.props.rolling });
  }
  componentDidUpdate() {
    if (this.props.rolling) {
      this.rollDice(this.props.dieOne, this.props.dieTwo);
    }
  }
  rollDice = () => {
    setTimeout(() => {
      this.props.stopRoll();
    }, 2000);

    const dice = [...document.querySelectorAll(".die-list")];
    let x = -1;
    dice.forEach(die => {
      x++;

      this.toggleClasses(die);
      die.dataset.roll = this.props.diceArray[x];
    });
  };
  toggleClasses = die => {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  };

  getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    setTimeout(() => {
      this.props.stopRoll();
    }, 2000);

    // return random 1-6
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    return (
      <div className="dice-container">
        <div className="dice">
          <ol className="die-list even-roll" data-roll="1" id="die-1">
            <li className="die-item" data-side="1">
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="2">
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="3">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="4">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="5">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="6">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
          </ol>
          <ol className="die-list odd-roll" data-roll="1" id="die-2">
            <li className="die-item" data-side="1">
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="2">
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="3">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="4">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="5">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
            <li className="die-item" data-side="6">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Dice;
