import * as React from "react";

import * as actions from "../actions/";
import { StoreState, DescriptionItemType } from "../types/index";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import posed from "react-pose";
import { homeData } from "../data/home";
import { Link } from "react-router-dom";
import arrow from "../images/arrow.svg";

export interface Props {}

export interface State {
  homeTextVisible: Boolean[];
  homeHeaderVisible: Boolean;
  count: number;
}

class HelloContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      homeTextVisible: homeData.description.map(() => false),
      homeHeaderVisible: false,
      count: 0
    };
  }

  HomeHeader = posed.h3({
    hidden: {
      opacity: "0",
      margin: "-100px 0px"
    },
    visible: {
      opacity: "1",
      margin: "20px 0px"
    }
  });

  HomeText = posed.div({
    hidden: {
      opacity: "0"
    },
    visible: {
      opacity: "1"
    }
  });

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        homeHeaderVisible: true
      });
    }, 1000);

    const textInterval = setInterval(() => {
      const { count, homeTextVisible } = this.state;
      if (count === homeData.description.length) {
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
    const { homeTextVisible, homeHeaderVisible } = this.state;

    const homeComponent = homeData.description.map(
      (description: DescriptionItemType, index: number) => {
        return (
          <Link to={description.link} className="home-text-link">
            <this.HomeText
              className={"home-text-container"}
              pose={homeTextVisible[index] ? "visible" : "hidden"}
            >
              <div className="home-text-hover-container">
                <p>{description.hoverText}</p>
                <div className="home-text-arrow-container">
                  <img className="home-text-arrow" src={arrow} />
                </div>
              </div>
              <p className={"home-text"}>{description.text}</p>
            </this.HomeText>
          </Link>
        );
      }
    );

    return (
      <div className="container">
        <this.HomeHeader
          className="main-header"
          pose={homeHeaderVisible ? "visible" : "hidden"}
        >
          {homeData.header}
        </this.HomeHeader>
        {homeComponent}
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
)(HelloContainer);
