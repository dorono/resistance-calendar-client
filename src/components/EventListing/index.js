import React, { Component } from 'react';
import moment from 'moment';
import Radium from 'radium';

const styles = {
  eventListing: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '12px 10px',
    borderBottom: '1px solid #ddd',
  // &:last-of-type {
  //   border-bottom: 0,
  },
  mainImage: {
    height: '85px',
    width: '85px',
  },
  info: {
    marginLeft: '10px',
  },
  title: {
    fontSize: '1.2em',
    //color: $SECONDARY,
    fontWeight: 'bold',
    textDecoration: 'none',
    // &:hover {
    //   text-decoration: underline,
    // },
  },
  descriptionTime: {
    fontSize: '0.8em',
    marginBottom: 0,
  },
}


class EventListing extends Component {
  render() {
    const event = this.props.event;

    const DAY_FMT = 'ddd, MMM D', YEAR_FMT = 'YYYY', TIME_FMT = 'h:mma'
    let time;
    if (event.all_day) {
      time = moment(event.all_day_date).format(DAY_FMT);
    } else {
      const start = moment(event.start_date), end = moment(event.end_date);
      time = start.format(DAY_FMT + (start.year() !== moment().year() ? ` ${YEAR_FMT} ` : ' ') + TIME_FMT) + ' - ';
      if (start.isSame(end, 'day')) {
        time += end.format(TIME_FMT);
      } else {
        time += end.format(`${DAY_FMT} ${TIME_FMT}`);
      }
    }

    return (
      <div style={styles.eventListing}>
        <a href={event.browser_url} style={styles.imgContainer}>
          <img style={styles.mainImage} src={event.featured_image_url} alt="" />
        </a>
        <div style={styles.info}>
          <a style={styles.title} href={event.browser_url}>{event.title}</a>
          <p style={styles.descriptionTime}>{time}</p>
          <p style={styles.descriptionTime}>{event.description.length < 150 ? event.description : event.description.slice(0, 150) + '...'}</p>
        </div>
      </div>
    )
  }
}

export default Radium(EventListing);
