import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getPostByIdFunc, getPostsBulkFunc } from './actions';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <button onClick={() => {
          this.props.getPostById(1);
        }}>By Id</button>
        <button onClick={() => {
          this.props.getPostBulk();
        }}>In bulk</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getPostById: getPostByIdFunc(dispatch),
    getPostBulk: getPostsBulkFunc(dispatch)
  }
};


const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
