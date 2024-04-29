import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HospitalComponent from './components/hospital';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          
          <Route path="/hospitals" component={HospitalComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
