import * as React from "react";
import posed from "react-pose";
import { Link } from "react-router-dom";
import { MenuItemType } from "../types";

export interface Props {}

export interface State {
  logoClicked: Boolean;
}

export default class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      logoClicked: false
    };
  }

  componentDidMount() {
    if (window.innerWidth > 768) {
      setTimeout(() => {
        this.setState({
          logoClicked: true
        });
      }, 400);
    }
  }

  menu = [
    {
      link: "/",
      name: "Home"
    },
    {
      link: "/about",
      name: "About Me"
    },
    {
      link: "/",
      name: ""
    },
    {
      link: "/fut",
      name: "Projects"
    },
    {
      link: "/blog",
      name: "Blog"
    }
  ];

  LogoBox = posed.div({
    hoverable: true,
    init: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)"
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)"
    },
    normal: { rotate: "0deg" },
    clicked: { rotate: "360deg" }
  });

  MenuBox = posed.div({
    normal: {
      opacity: 0,
      padding: "0px 0px",
      margin: window.innerWidth > 768 ? "0px -100px" : "-50px 0px"
    },
    clicked: {
      opacity: 1,
      padding: window.innerWidth > 768 ? "0px 0px" : "0px 0px",
      margin: "0px 0px"
    }
  });

  onLogoClick() {
    this.setState({
      logoClicked: !this.state.logoClicked
    });
  }

  renderMenu() {
    const { logoClicked } = this.state;
    const menuComponent = this.menu.map((menuItem: MenuItemType) => {
      const headerMenuEmpty = menuItem.name ? "" : "header-menu-empty";
      return (
        <this.MenuBox
          className={"header-menu " + headerMenuEmpty}
          pose={logoClicked ? "clicked" : "normal"}
        >
          <Link to={menuItem.link}>
            <p>{menuItem.name}</p>
          </Link>
        </this.MenuBox>
      );
    });
    console.log(menuComponent);

    return <div className="header-menu-container">{menuComponent}</div>;
  }

  render() {
    const { logoClicked } = this.state;
    return (
      <>
        <div className="header-container">
          <div className="header-rect header-drop" />
          <div className="header-circle" />
          <div className="header-rect" />
          <this.LogoBox
            className="logo"
            pose={logoClicked ? "clicked" : "normal"}
            onClick={this.onLogoClick.bind(this)}
          >
            <p>TB</p>
          </this.LogoBox>
        </div>
        {this.renderMenu()}
      </>
    );
  }
}
