import React, {useState} from 'react';

import Home from './screens/Home';
import Authentication from './screens/Authentication';
import Vinay from './screens/Profile';
import Profile from './screens/Profile';

function App() {
  const [screen, setScreen] = useState('auth');

  if (screen === 'auth') return <Authentication setScreen={setScreen} />;
  else if (screen === 'Profile') return <Profile setScreen={setScreen} />;
  else if (screen === 'Home') return <Home setScreen={setScreen} />;
  else return <Home setScreen={setScreen} />;
}

export default App;
