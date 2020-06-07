import React from "react";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";
// import Home from "./components/Home";
// import Login from "./components/Login";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Div, Spinner } from './components/Common/Common';
import './App.css';

function App(props) {
  const { isAuthenticated, isVerifying, showLoader } = props;
  return (
    <>
      {showLoader && (<Spinner />)}
      <Header />
      <Div cName="content">
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            component={Home}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Div>
      <Footer />
    </>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
    showLoader: state.auth.loading
  };
}

export default connect(mapStateToProps)(App);
