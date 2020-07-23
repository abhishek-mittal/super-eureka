import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import './App.scss';
import Layout from './modules/+core/layout';
import Routes from "./root-routes";
import Store from './store';



function App() {
  return (
    <BrowserRouter  >

      <Provider store={Store}>
        <Layout>
          <Routes/>
        </Layout>
      </Provider>

    </BrowserRouter>
  );
}

export default App;
