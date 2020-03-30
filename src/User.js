import React from "react";
import "./User.scss";
import Api from "./api";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }
  componentDidMount() {}
  rollDice = () => {
    Api.post("/startroll", { user: this.state.user, diceCount: 2 }).then(
      function(resp) {
        console.log(resp.data);
      }
    );
  };

  handleChange = event => {
    this.setState({ user: event.target.value });
  };
  render() {
    return (
      <div className="User">
        Roll The Dice <br />
        <input
          type="text"
          placeholder="Enter Your Name"
          value={this.state.user}
          onChange={this.handleChange}
        />
        <button onClick={this.rollDice}>ROLL</button>
      </div>
    );
  }
}
export default User;
