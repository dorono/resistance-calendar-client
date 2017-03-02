import React from "react";
import "./Calendar.css";
import EventListing from "./events/EventListing.js";
import api from "../api.js";

export default class Calendar extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      events: []
    };
  }
  componentDidMount() {
    api.getEvents()
      .then(events => this.setState({ events }));
  }
  render() {
    return (
      <div className="Calendar">
        {this.state.events.map((event, index) => {
          return (
            <div className={index % 2 ? "even" : "odd"}>
              <EventListing event={event} />
            </div>
          )
        })}
      </div>
    );
  }
}