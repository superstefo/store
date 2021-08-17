import React from "react";
import { NavLinkButton } from "./TinyParts";

class ErrorPage extends React.Component {
  constructor(props) {
    super(props);
    let err = props.location?.state || {};
    this.state = {
      text: "" + err
    };
  };

  render() {
    return (
      <nav>
        <div className="text-center">
          <label>{this.state.text}</label>
          <p />
          <br />
          <NavLinkButton to="/" label="OK" />
        </div>
        <br />
      </nav>
    );
  }
}

export default ErrorPage;