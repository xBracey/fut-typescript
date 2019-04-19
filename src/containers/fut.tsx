import * as React from "react";

import * as actions from "../actions/";
import { PlayerType, StoreState } from "../types/index";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import logo from "../images/futLogo.png";
import gold from "../images/gold.png";
import silver from "../images/silver.png";
import bronze from "../images/bronze.png";

export interface Props {
  setPlayerid: (playerID: string) => void;
  playerID: string;
}

export interface State {
  searchTerm: string;
  data: Object[];
  playerData: PlayerType;
}

class FutContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchTerm: "",
      data: [],
      playerData: {
        ID: "",
        Name: "",
        Rating: "",
        Price: "",
        SkillsMoves: "",
        WeakFoot: "",
        Pace: "",
        Shooting: "",
        Passing: "",
        Dribbling: "",
        Defending: "",
        Phyiscality: "",
        Popularity: "",
        BaseStats: "",
        InGameStats: "",
        Revision: "",
        Position: "",
        WorkRate: "",
        Height: "",
        Club: "",
        Country: "",
        League: "",
        NationPic: "",
        ClubPic: "",
        PlayerPic: ""
      }
    };
  }

  onChange = (e: any) => {
    fetch(`http://api.tombrace.co.uk/players?search=${e.target.value}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      });
  };

  onPlayerClicked(id: string) {
    this.props.setPlayerid(id);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.playerID !== prevProps.playerID) {
      const { playerID } = this.props;
      fetch(`http://api.tombrace.co.uk/player?id=${playerID}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ playerData: data });
        });
    }
  }

  renderList() {
    const { data } = this.state;
    return data.length === 0 ? null : (
      <div className="list">
        <ul>
          {data.map((player: PlayerType, index: number) => (
            <li
              onClick={() => this.onPlayerClicked(player.ID)}
              className={"single-player-" + (index % 2)}
            >
              {player.Name}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  renderCardStats() {
    const { playerData } = this.state;

    return (
      <div className="stats-container">
        <div className="stats-sub-container">
          <p> PAC {playerData.Pace} </p>
          <p> SHO {playerData.Shooting} </p>
          <p> PAS {playerData.Passing} </p>
        </div>
        <div className="stats-sub-container">
          <p> DRI {playerData.Dribbling} </p>
          <p> DEF {playerData.Defending} </p>
          <p> PHY {playerData.Phyiscality} </p>
        </div>
      </div>
    );
  }

  render() {
    const { playerData } = this.state;
    let photo = bronze;
    if (parseInt(playerData.Rating) > 74) {
      photo = gold;
    } else if (parseInt(playerData.Rating) > 64) {
      photo = silver;
    }

    return (
      <div className="page-container fut-page-container">
        <div className="container fut-input-container">
          <img src={logo} className="fut-logo" />
          <input
            onInput={(e: any) => {
              this.onChange(e);
            }}
            className="search-input"
          />
          {this.renderList()}
        </div>
        <div className="container fut-card-container">
          <div
            style={{ backgroundImage: `url(${photo})` }}
            className="card-photo"
          >
            <div className="flag-container">
              <p className="overall"> {playerData.Rating} </p>
              <p className="position"> {playerData.Position} </p>
              <img
                className="flag"
                src={decodeURIComponent(playerData.NationPic)}
              />
              <img
                className="club-logo"
                src={decodeURIComponent(playerData.ClubPic)}
              />
            </div>
            <img
              className="photo"
              src={decodeURIComponent(playerData.PlayerPic)}
            />
            <p className="name"> {playerData.Name} </p>
            {this.renderCardStats()}
          </div>
        </div>
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
    setPlayerid: (playerID: string) => dispatch(actions.setPlayerid(playerID))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FutContainer);
