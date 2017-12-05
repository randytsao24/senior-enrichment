/*
 * Campuses.jsx
 *
 *  Contains definition for Campuses component which displays
 *  all campuses.
 *
 */

import React, { Component } from 'react';
import Store from '../store';
 
export default class Campuses extends Component {
  constructor() {
    super();
    this.state = Store.getState();
  }

  componentDidMount() {
    console.log("suhh dude");
  }

  render() {   
    //console.log(this.state);

    return (
      <div>
        <h4>Campuses go here</h4>
      </div>
    )
  }
}