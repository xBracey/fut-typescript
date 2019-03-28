import * as React from "react";

import * as actions from "../actions/";
import { StoreState } from "../types/index";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import posed from "react-pose";
import { homeData } from "../data/home";

export interface Props {}

export interface State {
  homeTextVisible: Boolean[];
  count: number;
}

class HelloContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      homeTextVisible: homeData.map(() => false),
      count: 0
    };
  }

  HomeText = posed.div({
    hidden: {
      opacity: "0"
    },
    visible: {
      opacity: "1"
    }
  });

  componentDidMount() {
    const textInterval = setInterval(() => {
      const { count, homeTextVisible } = this.state;
      if (count === homeData.length) {
        clearInterval(textInterval);
      }
      homeTextVisible[count] = true;
      this.setState({
        homeTextVisible,
        count: count + 1
      });
    }, 2000);
  }

  render() {
    const { homeTextVisible } = this.state;

    const homeComponent = homeData.map((text: string, index: number) => {
      return (
        <this.HomeText
          className={"home-text"}
          pose={homeTextVisible[index] ? "visible" : "hidden"}
        >
          {text}
        </this.HomeText>
      );
    });

    return <div className="container">{homeComponent}</div>;
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
