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
        <div className="top-bar">
          <div className="search-input-container">
            <input type="text" className="search" placeholder="SEARCH" />
          </div>
          <button className="calendar-button" onClick={() => alert("Not implemented yet!")} />
        </div>
        <div className="day-header">
          <span className="header-count">{this.state.events.length} events</span>
          <span className="header-day">Today</span>
          <span className="header-count">Some cities</span>
        </div>
        {this.state.events.map((event, index) => {
          return <EventListing event={event} key={event.identifiers[0]} />
        })}
      </div>
    );
  }
}