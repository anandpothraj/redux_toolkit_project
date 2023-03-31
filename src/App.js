import './App.css';
import CakeView from './features/cake/CakeView';
import { UserView } from './features/user/UserView';
import IcecreamView from './features/icecream/IcecreamView';

const App = () => {
  return (
    <div style={{margin : "10vh auto", maxWidth:"50vw"}}>
      done
      <CakeView/>
      <IcecreamView/>
      <UserView/>
    </div>
  );
};

export default App;