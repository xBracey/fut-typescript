import * as React from "react";
import { Redirect } from "react-router-dom";

export interface Props {
  location: {
    search: string;
  };
}

class Routing extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { search } = this.props.location;
    if (search) {
      const link = search.split("?")[1];
      return <Redirect to={link} />;
    }
    return null;
  }
}

export default Routing;
