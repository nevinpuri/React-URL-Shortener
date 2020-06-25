import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link, Redirect } from "react-router-dom";
import Header from "../Header.jsx";
import URLShortener from "../URLShortener.jsx";
import "../index.css";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      URLCreated: false,
    };
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container text-center">
          <form onSubmit={this.handleLinkCreate}>
            <div className="form-group m-2">
              <h1>
                {this.state.URLCreated
                  ? "Done. Copy the URL Below"
                  : "Enter in a URL"}
              </h1>
              <input
                type="url"
                className="form-control"
                disabled={this.state.URLCreated ? true : false}
                onChange={this.handleUpdateInput}
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary"
                id="url-submit-button"
                type="submit"
                onSubmit={this.handleLinkCreate}
                disabled={this.state.URLCreated ? true : false}
              >
                Create Shortened URL
              </button>
              <URLShortener
                longURL={this.state.value}
                URLCreated={this.state.URLCreated}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }

  handleUpdateInput = (evt) => {
    this.setState({ value: evt.target.value });
  };

  handleLinkCreate = (e) => {
    e.preventDefault();
    let handleInput = this.state.value;
    /*if (
      handleInput.match(
        /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm
      )
    )
      this.setState({ URLCreated: true }); */
    this.setState({ URLCreated: true });
    console.log(this.URLCreated);
  };
}

export default MainPage;
