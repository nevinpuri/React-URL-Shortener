import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link, Redirect } from "react-router-dom";
import Header from "../Header.jsx";
import URLShortener from "../URLShortener.jsx";
import axios from "axios";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      URLCreated: false,
      shortURL: "",
    };
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container text-center">
          <form onSubmit={this.handleLinkCreate}>
            <div className="form-group m-2">
              <h1
                className={this.state.URLCreated ? "text-success" : "text-body"}
              >
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
                shortURL={this.state.shortURL}
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

  handleLinkCreate = async (e) => {
    e.preventDefault();

    setTimeout(() => {
      this.generateShortURL();
    }, 10);

    if (this.state.value != "" && this.state.value.length < 500)
      this.setState({ URLCreated: true });
  };

  generateShortURL = () => {
    if (this.state.URLCreated === true) {
      axios
        .post("https://nevin.cc:5000/link", {
          longURL: this.state.value,
        })
        .then((response) => this.setState({ shortURL: response.data.shortURL }))
        .catch((error) => console.log(error));
    }
  };
}

export default MainPage;
