import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class SearchPage extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("Comp did mount on search page");
  }

  render() {
    return (
      <div className="input-div container">
        <h1 className="text-center mb-4">
          Search for the topics you want to read
        </h1>
        <div className="input-box mx-auto input-group my-2">
          <input
            type="text"
            className="form-control p-2 ps-4"
            placeholder="Business, Sports, Politics.."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
