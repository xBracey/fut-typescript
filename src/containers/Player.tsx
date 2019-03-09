import * as React from "react";

import * as actions from "../actions/";
import { PlayerType, StoreState } from "../types/index";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import gold from "../images/gold.png";
import silver from "../images/silver.png";
import bronze from "../images/bronze.png";

export interface Props {
  playerID: "";
}

export interface State {
  data: PlayerType;
}

class Player extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: {
        ID: "",
        Name: "",
        Age: "",
        Photo: "",
        Nationality: "",
        Flag: "",
        Overall: "",
        Potential: "",
        Club: "",
        Club_Logo: "",
        Value: "",
        Wage: "",
        Special: "",
        Preferred_Foot: "",
        International_Reputation: "",
        Weak_Foot: "",
        Skill_Moves: "",
        Work_Rate: "",
        Body_Type: "",
        Real_Face: "",
        Position: "",
        Jersey_Number: "",
        Joined: "",
        Loaned_From: "",
        Contract_Valid_Until: "",
        Height: "",
        Weight: "",
        LS: "",
        ST: "",
        RS: "",
        LW: "",
        LF: "",
        CF: "",
        RF: "",
        RW: "",
        LAM: "",
        CAM: "",
        RAM: "",
        LM: "",
        LCM: "",
        CM: "",
        RCM: "",
        RM: "",
        LWB: "",
        LDM: "",
        CDM: "",
        RDM: "",
        RWB: "",
        LB: "",
        LCB: "",
        CB: "",
        RCB: "",
        RB: "",
        Crossing: "",
        Finishing: "",
        HeadingAccuracy: "",
        ShortPassing: "",
        Volleys: "",
        Dribbling: "",
        Curve: "",
        FKAccuracy: "",
        LongPassing: "",
        BallControl: "",
        Acceleration: "",
        SprintSpeed: "",
        Agility: "",
        Reactions: "",
        Balance: "",
        ShotPower: "",
        Jumping: "",
        Stamina: "",
        Strength: "",
        LongShots: "",
        Aggression: "",
        Interceptions: "",
        Positioning: "",
        Vision: "",
        Penalties: "",
        Composure: "",
        Marking: "",
        StandingTackle: "",
        SlidingTackle: "",
        GKDiving: "",
        GKHandling: "",
        GKKicking: "",
        GKPositioning: "",
        GKReflexes: "",
        Release_Clause: ""
      }
    };
  }

  componentDidMount() {
    const { playerID } = this.props;
    if (playerID === "") {
      window.location.href = "/";
    } else {
      fetch(`http://localhost:3001/player?id=${playerID}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ data });
        });
    }
  }
  render() {
    const { data } = this.state;
    let photo = bronze;
    console.log(parseInt(data.Overall));
    if (parseInt(data.Overall) > 74) {
      photo = gold;
    } else if (parseInt(data.Overall) > 64) {
      photo = silver;
    }

    console.log(data);

    return (
      <div className="container">
        <div
          style={{ backgroundImage: `url(${photo})` }}
          className="card-photo"
        >
          <img className="flag" src={decodeURIComponent(data.Flag)} />
          <img className="club-logo" src={decodeURIComponent(data.Club_Logo)} />
          <img className="photo" src={decodeURIComponent(data.Photo)} />
          <p className="overall"> {data.Overall} </p>
          <p className="position"> {data.Position} </p>
          <p className="name"> {data.Name} </p>
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
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
