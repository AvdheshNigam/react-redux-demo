import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyBook } from '../redux/index';

const HookBookContainer = () => {

  const numberOfBooks = useSelector(state=>state.numberOfBooks);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Hook Book Container</h1>
      <h2>Number of Books - {numberOfBooks}</h2>
      <button onClick={()=>dispatch(buyBook())}>Buy Book</button>
    </div>
  )
}

export default HookBookContainer;