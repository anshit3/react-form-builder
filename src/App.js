import { hot } from 'react-hot-loader/root';
import React from 'react';
import Header from './Components/Header/Header';
import PageConfig from './Components/PageConfig/PageConfig';
import SubPageConfig from './Components/SubPageConfig/SubPageConfig';
import ThankYou from './Components/ThankYou/ThankYou';

const App = () => {
  return (
    <>
      <Header />
      {/* <PageConfig ></PageConfig> */}
      {/* <SubPageConfig></SubPageConfig> */}
      <ThankYou></ThankYou>
    </>
  );
};

export default hot(App);
