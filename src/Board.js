import React from "react";
import "./Board.scss";
import Dice from "./Dice.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faSubway,
  faQuestion,
  faCube,
  faLightbulb,
  faCar,
  faTint
} from "@fortawesome/free-solid-svg-icons";
import { faFrownOpen } from "@fortawesome/free-regular-svg-icons";
import Api from "./api";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rolling: false,
      diceArray: [1, 1],
      user: ""
    };
  }
  componentDidMount() {
    this.checkDice = setInterval(() => {
      Api.get("/checkroll").then(status => {
        if (status.data.rolling && this.state.rolling === false) {
          this.setState({
            rolling: status.data.rolling,
            diceArray: status.data.diceArray,
            user: status.data.user + " is rolling...."
          });
          document.getElementById("user-rolling").classList.toggle("rolling");
        }
      });
    }, 500);
  }
  stopRoll = () => {
    this.setState({ rolling: false });
    Api.get("/stoproll");
    document.getElementById("user-rolling").classList.toggle("rolling");
  };
  render() {
    return (
      <div className="Board">
        <div className="userRolling" id="user-rolling">
          {this.state.user}
        </div>
        <Dice
          rolling={this.state.rolling}
          stopRoll={this.stopRoll}
          diceArray={this.state.diceArray}
        ></Dice>
        <div className="table">
          <div className="board">
            <div className="center">
              <div className="community-chest-deck">
                <h2 className="label">Community Chest</h2>
                <div className="deck"></div>
              </div>
              <h1 className="title">MONOPOLY</h1>
              <div className="chance-deck">
                <h2 className="label">Chance</h2>
                <div className="deck"></div>
              </div>
            </div>

            <div className="space corner go">
              <div className="container">
                <div className="instructions">
                  Collect $200.00 salary as you pass
                </div>
                <div className="go-word">go</div>
              </div>
              <FontAwesomeIcon className="arrow" icon={faLongArrowAltLeft} />
            </div>

            <div className="row horizontal-row bottom-row">
              <div className="space property">
                <div className="container">
                  <div className="color-bar light-blue"></div>
                  <div className="name">Connecticut Avenue</div>
                  <div className="price">PRICE $120</div>
                </div>
              </div>
              <div className="space property">
                <div className="container">
                  <div className="color-bar light-blue"></div>
                  <div className="name">Vermont Avenue</div>
                  <div className="price">Price $100</div>
                </div>
              </div>
              <div className="space chance">
                <div className="container">
                  <div className="name">Chance</div>
                  <FontAwesomeIcon className="drawing" icon={faQuestion} />
                </div>
              </div>
              <div className="space property">
                <div className="container">
                  <div className="color-bar light-blue"></div>
                  <div className="name">Oriental Avenue</div>
                  <div className="price">Price $100</div>
                </div>
              </div>
              <div className="space railroad">
                <div className="container">
                  <div className="name">Reading Railroad</div>
                  <FontAwesomeIcon className="drawing" icon={faSubway} />
                  <div className="price">Price $200</div>
                </div>
              </div>
              <div className="space fee income-tax">
                <div className="container">
                  <div className="name">Income Tax</div>
                  <div className="diamond"></div>
                  <div className="instructions">
                    Pay 10%
                    <br />
                    or
                    <br />
                    $200
                  </div>
                </div>
              </div>
              <div className="space property">
                <div className="container">
                  <div className="color-bar dark-purple"></div>
                  <div className="name">Baltic Avenue</div>
                  <div className="price">Price $50</div>
                </div>
              </div>
              <div className="space community-chest">
                <div className="container">
                  <div className="name">Community Chest</div>
                  <FontAwesomeIcon className="drawing" icon={faCube} />
                  <div className="instructions">
                    Follow instructions on top card
                  </div>
                </div>
              </div>
              <div className="space property">
                <div className="container">
                  <div className="color-bar dark-purple"></div>
                  <div className="name three-line-name">
                    Mediter-
                    <br />
                    ranean
                    <br />
                    Avenue
                  </div>
                  <div className="price">Price $50</div>
                </div>
              </div>
            </div>

            <div className="space corner jail">
              <div className="just">Just</div>
              <div className="drawing">
                <div className="container">
                  <div className="name">In</div>
                  <div className="window">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <FontAwesomeIcon className="person" icon={faFrownOpen} />
                  </div>
                  <div className="name">Jail</div>
                </div>
              </div>
              <div className="visiting">Visiting</div>
            </div>

            <div className="row vertical-row left-row">
              <div className="space property">
                <div className="container">
                  <div className="color-bar orange"></div>
                  <div className="name">New York YES</div>
                  <div className="price">Price $200</div>
                </div>
              </div>
              <div className="space property">
                <div className="container">
                  <div className="color-bar orange"></div>
                  <div className="name">Tennessee Avenue</div>
                  <div className="price">Price $180</div>
                </div>
              </div>
              <div className="space community-chest">
                <div className="container">
                  <div className="name">Community Chest</div>
                  <i className="drawing fa fa-cube"></i>
                  <div className="instructions">
                    Follow instructions on top card
                  </div>
                </div>
              </div>
              <div className="space property">
                <div className="container">
                  <div className="color-bar orange"></div>
                  <div className="name">St. James Avenue</div>
                  <div className="price">Price $180</div>
                </div>
              </div>
              <div className="space railroad">
                <div className="container">
                  <div className="name long-name">Pennsylvania Railroad</div>
                  <FontAwesomeIcon className="drawing" icon={faSubway} />
                  <div className="price">Price $200</div>
                </div>
              </div>
              <div className="space property">
                <div className="container">
                  <div className="color-bar purple"></div>
                  <div className="name">Virginia Avenue</div>
                  <div className="price">Price $160</div>
                </div>
              </div>
              <div className="space property">
                <div className="container">
                  <div className="color-bar purple"></div>
                  <div className="name">States Avenue</div>
                  <div className="price">Price $140</div>
                </div>
              </div>
              <div className="space utility electric-company">
                <div className="container">
                  <div className="name">Electric Company</div>
                  <FontAwesomeIcon className="drawing" icon={faLightbulb} />
                  <div className="price">Price $150</div>
                </div>
              </div>
              <div className="space property">
                <div className="container">
                  <div className="color-bar purple"></div>
                  <div className="name">St. Charles Place</div>
                  <div className="price">Price $140</div>
                </div>
              </div>
            </div>

            <div className="space corner free-parking">
              <div className="container">
                <div className="name">Free</div>
                <FontAwesomeIcon className="drawing" icon={faCar} />
                <div className="name">Parking</div>
              </div>
            </div>

            <div className="row horizontal-row top-row">
              <div className="space property">
                <div className="container">
                  <div className="color-bar red"></div>
                  <div className="name">Kentucky Avenue</div>
                  <div className="price">Price $220</div>
                </div>
              </div>
              <div className="space chance">
                <div className="container">
                  <div className="name">Chance</div>
                  <i className="drawing fa fa-question blue"></i>
                </div>
              </div>
              <div className="space property">
                <div className="container">
                  <div className="color-bar red"></div>
                  <div className="name">Indiana Avenue</div>
                  <div className="price">Price $220</div>
                </div>
              </div>
              <div className="space property">
                <div className="container">
                  <div className="color-bar red"></div>
                  <div className="name">Illinois Avenue</div>
                  <div className="price">Price $200</div>
                </div>
              </div>
              <div className="space railroad">
                <div className="container">
                  <div className="name">B &amp; O Railroad</div>
                  <FontAwesomeIcon className="drawing" icon={faSubway} />
                  <div className="price">Price $200</div>
                </div>
              </div>
              <div className="space property">
                <div className="container">
                  <div className="color-bar yellow"></div>
                  <div className="name">Atlantic Avenue</div>
                  <div className="price">Price $260</div>
                </div>
              </div>
              <div className="space property">
                <div className="container">
                  <div className="color-bar yellow"></div>
                  <div className="name">Ventnor Avenue</div>
                  <div className="price">Price $260</div>
                </div>
              </div>
              <div className="space utility waterworks">
                <div className="container">
                  <div className="name">Waterworks</div>
                  <FontAwesomeIcon className="drawing" icon={faTint} />
                  <div className="price">Price $120</div>
                </div>
              </div>
              <div className="space property">
                <div className="container">
                  <div className="color-bar yellow"></div>
                  <div className="name">Marvin Gardens</div>
                  <div className="price">Price $280</div>
                </div>
              </div>
            </div>

            <div className="space corner go-to-jail">
              <div className="container">
                <div className="name">Go To</div>
                <i className="drawing fa fa-gavel"></i>
                <div className="name">Jail</div>
              </div>
            </div>

            <div className="row vertical-row right-row">
              <div className="space property">
                <div className="container">
                  <div className="color-bar green"></div>
                  <div className="name">Pacific Avenue</div>
                  <div className="price">Price $300</div>
                </div>
              </div>
              <div className="space property">
                <div className="container">
                  <div className="color-bar green"></div>
                  <div className="name three-line-name">
                    North Carolina Avenue
                  </div>
                  <div className="price">Price $300</div>
                </div>
              </div>
              <div className="space community-chest">
                <div className="container">
                  <div className="name">Community Chest</div>
                  <i className="drawing fa fa-cube"></i>
                  <div className="instructions">
                    Follow instructions on top card
                  </div>
                </div>
              </div>
              <div className="space property">
                <div className="container">
                  <div className="color-bar green"></div>
                  <div className="name long-name">Pennsylvania Avenue</div>
                  <div className="price">Price $320</div>
                </div>
              </div>
              <div className="space railroad">
                <div className="container">
                  <div className="name">Short Line</div>
                  <FontAwesomeIcon className="drawing" icon={faSubway} />
                  <div className="price">Price $200</div>
                </div>
              </div>
              <div className="space chance">
                <div className="container">
                  <div className="name">Chance</div>
                  <i className="drawing fa fa-question"></i>
                </div>
              </div>
              <div className="space property">
                <div className="container">
                  <div className="color-bar dark-blue"></div>
                  <div className="name">Park Place</div>
                  <div className="price">Price $350</div>
                </div>
              </div>
              <div className="space fee luxury-tax">
                <div className="container">
                  <div className="name">Luxury Tax</div>
                  <div className="drawing fa fa-diamond"></div>
                  <div className="instructions">Pay $75.00</div>
                </div>
              </div>
              <div className="space property">
                <div className="container">
                  <div className="color-bar dark-blue"></div>
                  <div className="name">Boardwalk</div>
                  <div className="price">Price $400</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Board;
