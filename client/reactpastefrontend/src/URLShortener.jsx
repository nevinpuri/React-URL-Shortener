import React, { Component } from "react";
import axios from "axios";

class URLShortener extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="m-2">
        <h1 className={this.props.URLCreated ? "visible" : "invisible"}>
          {this.props.longURL}
        </h1>
      </div>
    );
  }

  createComponent = () => {
    return (
      <div>
        <h1>{this.props.longURL}</h1>
      </div>
    );
  };
}

export default URLShortener;
