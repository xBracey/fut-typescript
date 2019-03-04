import * as React from "react";

import * as actions from "../actions/";
import { PlayerType, StoreState } from "../types/index";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";
import "../styles/Main.css";

export interface Props {
  setPlayerid: (playerID: String) => void;
  playerID: String;
}

export interface State {
  searchTerm: String;
  data: Object[];
}

class HelloContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchTerm: "",
      data: []
    };
  }

  onChange = (e: any) => {
    fetch(`http://localhost:3001/players?search=${e.target.value}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      });
  };

  onPlayerClicked(id: String) {
    this.props.setPlayerid(id);
  }

  renderList() {
    const { data } = this.state;
    return data.length === 0 ? null : (
      <div className="list">
        <ul>
          {data.map((player: PlayerType) => (
            <Link to="/player">
              <li
                onClick={() => this.onPlayerClicked(player.ID)}
                className="single=player"
              >
                {player.Name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="search-container">
        <img src={logo} className="logo" />
        <input
          onInput={(e: any) => {
            this.onChange(e);
          }}
          className="search-input"
        />
        {this.renderList()}
      </div>
    );
  }
}

export function mapStateToProps({ playerID }: StoreState) {
  return {
    playerID
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.playerActions>) {
  return {
    setPlayerid: (playerID: String) => dispatch(actions.setPlayerid(playerID))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloContainer);
