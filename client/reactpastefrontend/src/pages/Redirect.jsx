import React, { Component } from "react";
import axios from "axios";

class Redirect extends Component {
  componentDidMount() {
    this.parseLink();
  }

  parseLink = () => {
    let searchParam = new URLSearchParams(this.props.location.search).get("q");
    axios
      .get(`http://localhost:5000/link/${searchParam}`)
      .then((recievedData) => window.location.replace(recievedData.data));
  };

  render() {
    return <div></div>;
  }
}

export default Redirect;
