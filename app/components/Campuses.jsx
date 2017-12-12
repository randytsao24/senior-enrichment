/*
 * components/Campuses.jsx
 *
 *  Contains definition for Campuses component which displays
 *  a list of all campuses.
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GridList, GridTile } from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import store from '../store';
import { styles } from '../utils';

function Campus (props) {
  return (
    <div>
      <div style={styles.header}>
        <h2>Campus List</h2>
        <NavLink to='/add-new-campus'>
          <RaisedButton 
            style={styles.button} 
            label='Add Campus'
            backgroundColor={styles.addButton.backgroundColor}>
          </RaisedButton>
        </NavLink>
      </div>
      <br/><br/>
      <MuiThemeProvider>
        <div style={styles.root}>
          <GridList cellHeight={300} style={styles.gridList} cols={3}>
          {
            props.campuses.map((campus) => {
              return (
                <NavLink key={campus.id} to={`/campuses/${campus.id}`}>
                  <GridTile
                    title={campus.name} >
                    <img src={campus.imageUrl}/>
                  </GridTile>
                </NavLink>
              );
            })
          }
          </GridList>
        </div>
      </MuiThemeProvider>
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
