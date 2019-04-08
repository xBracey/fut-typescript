import * as React from "react";

import posed from "react-pose";
import { aboutData } from "../data/about";

export interface Props {}

export interface State {
  aboutTablesVisible: Boolean;
  aboutParagraphVisible: Boolean;
  aboutHeaderVisible: Boolean;
}

class AboutContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      aboutTablesVisible: false,
      aboutParagraphVisible: false,
      aboutHeaderVisible: false
    };
  }

  AboutParagraph = posed.p({
    hidden: {
      opacity: "0",
      height: "0px",
      transition: { duration: 2000 }
    },
    visible: {
      opacity: "1",
      height: "fit-content",
      transition: { duration: 2000 }
    }
  });

  AboutText = posed.div({
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
        aboutHeaderVisible: true
      });
    }, 800);
    setTimeout(() => {
      this.setState({
        aboutParagraphVisible: true
      });
    }, 800);
    setTimeout(() => {
      this.setState({
        aboutTablesVisible: true
      });
    }, 2800);
  }

  render() {
    const {
      aboutParagraphVisible,
      aboutTablesVisible,
      aboutHeaderVisible
    } = this.state;

    const paragraphs = aboutData.paragraph.map((paragraph: string) => {
      return (
        <>
          {paragraph}
          <br />
          <br />
        </>
      );
    });

    const technologies = aboutData.technologies.map((paragraph: string) => {
      return <p className="about-bullet">{paragraph}</p>;
    });

    const languages = aboutData.languages.map((paragraph: string) => {
      return <p className="about-bullet">{paragraph}</p>;
    });

    return (
      <div className="main-container">
        <this.AboutText pose={aboutHeaderVisible ? "visible" : "hidden"}>
          <h3 className="about-header">{aboutData.header}</h3>
        </this.AboutText>
        <this.AboutParagraph
          pose={aboutParagraphVisible ? "visible" : "hidden"}
          className="about-paragraph"
        >
          {paragraphs}
        </this.AboutParagraph>
        <this.AboutText
          className="about-bullet-info-container"
          pose={aboutTablesVisible ? "visible" : "hidden"}
        >
          <div className={"about-bullet-container container-purple"}>
            <h3 className="about-bullet-header">Technologies</h3>
            {technologies}
          </div>
          <div className="about-splitter " />
          <div className={"about-bullet-container container-cyan"}>
            <h3 className="about-bullet-header">Languages</h3>
            {languages}
          </div>
        </this.AboutText>
      </div>
    );
  }
}

export default AboutContainer;
