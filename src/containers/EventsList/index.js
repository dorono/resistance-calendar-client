import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchEvents } from './actions';
import EventListing from "../../components/EventListing/index";
import Radium from 'radium';

const styles = {
  calendar: {
    background: '#fff',
  },
  topBar: {
    background: '#D8527B',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  searchInputContainer: {
    flex: 1,
  },
  searchInputContainerInput: {
    borderRadius: '20px',
    border: '1px solid #A9B4B1',
    padding: '10px 14px',
    width: '100%',
    color: '#222',
    outline: 'none',
    background: 'url(../../../src/assets/img/search-icon.png) no-repeat 95% center',
    // '::placeholder': {
    //   color: '#868686',
    // }
  },
  calendarButton: {
    cursor: 'pointer',
    margin: '0px 5px 0px 15px',
    border: 'none',
    background: 'transparent url(../../src/assets/img/calendar-icon.png) no-repeat contain',
    height: '29px',
    width: '29px',
  },
  dayHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.7)',
    boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.5)',
    textTransform: 'uppercase',
    fontFamily: 'Drone Ranger',
    marginBottom: '5px',
  },
  dayHeaderSpan: {
    margin: '0px 15px',
  },
  headerCount: {
    color: '#DDDDDD',
    fontSize: '1.1em',
  },
  headerDay: {
    fontSize: '2.5em',
  }
}

class EventsList extends Component {
  constructor(props) {
    super(props);

  //   this.state = {
  //    events: this.props.events,
  //  }
 }

 componentWillMount() {
   this.props.fetchEvents();
 }

 render() {
   return (
     <div style={styles.calendar}>
       <div style={styles.topBar}>
         <div style={styles.searchInputContainer}>
           <input type="text" style={styles.searchInputContainerInput} placeholder="SEARCH" />
         </div>
         <button style={styles.calendarButton} onClick={() => alert("Not implemented yet!")} />
       </div>
       <div style={styles.dayHeader}>
         <span style={styles.headerCount}>{this.props.events.length} events</span>
         <span style={styles.headerDay}>Today</span>
         <span style={styles.headerCount}>Some cities</span>
       </div>
       {this.props.events.map((event, index) => {
         return <EventListing event={event} key={event.identifiers[0]} />
       })}
     </div>
   );
  }
}



function mapStateToProps(state) {
  return {
    events: state.events.all
  };
}

EventsList.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, { fetchEvents })(Radium(EventsList));
