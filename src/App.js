import { hot } from 'react-hot-loader/root';
import React from 'react';
import Header from './Components/Header/Header';
import PageConfig from './Components/PageConfig/PageConfig';
import SubPageConfig from './Components/SubPageConfig/SubPageConfig'

const App = () => {
  return (
    <>
      <Header />
      {/* <PageConfig ></PageConfig> */}
      <SubPageConfig></SubPageConfig>
    </>
  );
};

export default hot(App);
