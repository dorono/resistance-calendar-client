import React from "react";
import "./EventListing.css";
import moment from "moment";

export default class EventListing extends React.Component {
  render() {
    const event = this.props.event;

    const DAY_FMT = "ddd, MMM D", YEAR_FMT = "YYYY", TIME_FMT = "h:mma"
    let time;
    if (event.all_day) {
      time = moment(event.all_day_date).format(DAY_FMT);
    } else {
      const start = moment(event.start_date), end = moment(event.end_date);
      time = start.format(DAY_FMT + (start.year() !== moment().year() ? ` ${YEAR_FMT} ` : " ") + TIME_FMT) + " - ";
      if (start.isSame(end, "day")) {
        time += end.format(TIME_FMT);
      } else {
        time += end.format(`${DAY_FMT} ${TIME_FMT}`);
      }
    }

    return (
      <div className="EventListing">
        <a href={event.browser_url} className="img-container">
          <img className="main-image" src={event.featured_image_url} alt="" />
        </a>
        <div className="info">
          <a className="title" href={event.browser_url}>{event.title}</a>
          <p className="time">{time}</p>
          <p>{event.description.length < 200 ? event.description : event.description.slice(0, 200) + "..."}</p>
          <div className="tag-container">
            {event.tags.map(i => <span className="tag" key={i}>#{i}</span>)}
          </div>
        </div>
      </div>
    )
  }
}