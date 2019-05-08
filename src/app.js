import React from 'react';
import { Route } from 'react-router-dom';
import ControlsContainer from './containers/controls/ControlsContainer';
import DetailsContainer from './containers/details/DetailsContainer';


const App = () => (
  <main>
    <Route exact path="/" component={ControlsContainer} />
    <Route exact path="/details/:id" component={DetailsContainer} />
  </main>
);

export default App;
