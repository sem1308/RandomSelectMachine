import React from 'react';
import RandomSelecting from './pages/RandomSelecting';
import {Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {

  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/rsm" component={RandomSelecting} />
    </div>
  );
}

export default App;
