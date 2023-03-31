import React from 'react';
import './App.css';
import CakeView from './features/cake/CakeView';
// import UserView from './features/user/UserView';
import IcecreamView from './features/icecream/IcecreamView';

const App = () => {
  return (
    <div style={{margin : "35vh auto", maxWidth:"50vw"}}>
      <CakeView/>
      <IcecreamView/>
      {/* <UserView/> */}
    </div>
  );
};

export default App;