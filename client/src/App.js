import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './pages/Books';
import NoMatch from './pages/NoMatch';

const App = () => (
    <Router>
      <Switch>
        <Route exact path="/books" component={Books} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
);

export default App;
