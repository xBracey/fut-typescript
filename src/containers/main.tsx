import * as React from "react";

import * as actions from "../actions/";
import { StoreState } from "../types/index";
import { connect } from "react-redux";
import { Dispatch } from "redux";

export interface Props {}

export interface State {}

class HelloContainer extends React.Component<Props, State> {
  render() {
    return <div className="container" />;
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
)(HelloContainer);
