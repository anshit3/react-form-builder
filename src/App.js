import { hot } from 'react-hot-loader/root';
import React from 'react';
import Header from './Components/Header/Header';
import PageConfig from './Components/PageConfig/PageConfig';

const App = () => {
  return (
    <>
      <Header />
      <PageConfig ></PageConfig>
    </>
  );
};

export default hot(App);
