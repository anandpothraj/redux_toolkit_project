import React, { useState } from 'react';
import { orderCake, restockCake } from './cakeSlice';
import { useSelector, useDispatch } from 'react-redux';

const CakeView = () => {

  const array = [1,2,3,4,5];
  const dispatch = useDispatch();
  const [cakesToRestock, setCakesToRestock ] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);

  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
        <button onClick={()=>dispatch(orderCake())}>Order Cake</button>
        <button onClick={()=>dispatch(restockCake(cakesToRestock))}>Restock Cake</button>
        <select value={cakesToRestock} onChange={(e)=>setCakesToRestock(e.target.value)}>
          {array.map((item, i) => {
            return (
              <option value={item} key={i}>{item}</option>
            )
          })}
        </select>
    </div>
  );
};

export default CakeView;