import { hot } from 'react-hot-loader/root';
import React from 'react';
import Header from './Components/Header/Header';
import PageConfig from './Components/PageConfig/PageConfig';
import SubPageConfig from './Components/SubPageConfig/SubPageConfig';
import ThankYou from './Components/ThankYou/ThankYou';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <PageConfig />
          </Route>
          <Route path="/configure">
            <SubPageConfig />
          </Route>
          <Route path="/thankyou">
            <ThankYou />
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default hot(App);
