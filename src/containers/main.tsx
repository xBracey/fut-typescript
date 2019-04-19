import * as React from "react";

import { DescriptionItemType } from "../types/index";
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
      count: -1
    };
  }

  textInterval = setInterval(() => {
    const { count, homeTextVisible } = this.state;
    if (count === homeData.description.length) {
      clearInterval(this.textInterval);
    } else if (count === -1) {
      this.setState({
        count: count + 1
      });
    } else {
      homeTextVisible[count] = true;
      this.setState({
        homeTextVisible,
        count: count + 1
      });
    }
  }, 800);

  componentWillUnmount() {
    clearInterval(this.textInterval);
  }

  HomeHeader = posed.h3({
    hidden: {
      opacity: "0",
      margin: "-100px 0px"
    },
    visible: {
      opacity: "1",
      margin: "30px 0px"
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
    }, 800);
  }

  render() {
    const { homeTextVisible, homeHeaderVisible } = this.state;

    const homeComponent = homeData.description.map(
      (description: DescriptionItemType, index: number) => {
        const color = index % 2 === 0 ? "container-purple" : "container-cyan";

        return (
          <Link to={description.link} className="home-text-link">
            <this.HomeText
              className={"home-text-main-container " + color}
              pose={homeTextVisible[index] ? "visible" : "hidden"}
            >
              <div className="home-text-hover-container">
                <p className="home-text">{description.hoverText}</p>
              </div>
              <div className="home-text-container">
                <p className={"home-text"}>{description.text}</p>
              </div>
              <div className="home-text-arrow-container">
                <img className="home-text-arrow" src={arrow} />
              </div>
            </this.HomeText>
          </Link>
        );
      }
    );

    return (
      <div className="main-container">
        <this.HomeHeader
          className="main-header"
          pose={homeHeaderVisible ? "visible" : "hidden"}
        >
          {homeData.header}
        </this.HomeHeader>
        <div className="main-info-container">{homeComponent}</div>
      </div>
    );
  }
}

export default HelloContainer;
