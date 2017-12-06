/*
 * components/Campuses.jsx
 *
 *  Contains definition for Campuses component which displays
 *  a list of all campuses.
 *
 */

import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

// TEMP: Use click handler to modify currently selected campus
function handleClick(event) {
  console.log('handleClick:', event.target);
}

function Campus (props) {
  return (
    <div>
      <h4>Campuses go here???</h4>
      <ul>
      {
        props.campuses.map((campus) => {
          return (
            <li key={campus.id}>
              <NavLink to={`/campuses/${campus.id}`} onClick={handleClick}>
                {campus.name}
              </NavLink>
            </li>
          )
        })
      }
      </ul>
    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  };
};

const CampusListContainer = connect(mapStateToProps)(Campus);

export default CampusListContainer;
