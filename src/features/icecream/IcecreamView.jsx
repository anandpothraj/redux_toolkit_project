import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { orderIcecream, restockIcecream } from '../icecream/icecreamSlice';

const IcecreamView = () => {

  const array = [1,2,3,4,5];
  const dispatch = useDispatch();
  const [icecreamsToRestock, setIcecreamsToRestock ] = useState(1);
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);

  return (
    <div>
      <h2>Number of Icecreams - {numOfIcecreams}</h2>
      <button onClick={()=>dispatch(orderIcecream())}>Order Icecream</button>
      <button onClick={()=>dispatch(restockIcecream(icecreamsToRestock))}>Restock Icecream</button>
      <select onChange={(e)=>setIcecreamsToRestock(e.target.value)}>
        {array.map((item, i) => {
          return (
            <option value={item} key={i}>{item}</option>
          )
        })}
      </select>
    </div>
  );
};

export default IcecreamView;