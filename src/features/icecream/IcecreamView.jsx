import React from 'react';
import { useSelector } from 'react-redux';

const IcecreamView = () => {

  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);

  return (
    <div>
      <h2>Number of Icecreams - {numOfIcecream}</h2>
      <button>Order Icecream</button>
      <button>Restock Icecream</button>
    </div>
  )
}

export default IcecreamView;