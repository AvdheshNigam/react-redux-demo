import React from 'react';
import { buyBook } from '../redux/index';
import { connect } from 'react-redux';

const bookContainer = (props) => {
  return (
    <div className="container">
      <h1>Number of book - {props.numberOfBooks}</h1>
      <button onClick={props.buyBook}>Buy Book</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numberOfBooks: state.numberOfBooks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyBook: function() {
      dispatch(buyBook());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(bookContainer);