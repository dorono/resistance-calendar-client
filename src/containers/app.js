import React, { Component, PropTypes } from 'react';
import Radium, { Style } from 'radium';


<Style rules={{
  	'*': {
  		boxSizing: 'border-box'
  	},
  	body: {
  		margin: 0,
  		padding: 0,
  		fontFamily: 'sans-serif',
  		background: '#fff'
  	},
  	'#app-container': {
  		maxWidth: '100%',
  		width: 1000,
  		margin: 'auto'
  	},
  	'#app-top-menu': {
  		boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.5)',
  		zIndex: 1,
  		position: 'relative'
  	},
  	'#logo': {
  		maxWidth: '30%',
  		display: 'block',
  		padding: 8
  	}
}} />


export default class App extends Component {
  render() {
    return (
        <div>
          {this.props.children}
        </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};
