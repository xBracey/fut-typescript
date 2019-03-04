import * as React from "react";

import * as actions from "../actions/";
import { StoreState } from "../types/index";
import { connect } from "react-redux";
import { Dispatch } from "redux";

export interface Props {
  setPlayerid: (playerID: number) => void;
  playerID: number;
}

export interface State {
  searchTerm: String;
}

class HelloContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  onChange = (e: any) => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  render() {
    const { setPlayerid, playerID } = this.props;
    const { searchTerm } = this.state;

    return (
      <div className="search-container">
        <input
          onInput={(e: any) => {
            this.onChange(e);
          }}
        />
        <button onClick={() => setPlayerid(5)}> Set </button>
        {searchTerm}
        {playerID}
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
    setPlayerid: (playerID: number) => dispatch(actions.setPlayerid(playerID))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloContainer);
