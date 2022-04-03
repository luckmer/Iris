import React from "react";
import { Provider } from "react-redux";
import { Route, useLocation } from "react-router-dom";
import store from "../redux/store";
import routes from "./index/index";
import LoginTheme from "../components/loginAuth/LoginAuth";
const Paginator = () => {
  const location = useLocation();

  return (
    <Provider store={store}>
      <LoginTheme />
      {/* {routes.map(({ path }) => (
        <Route path={path} />
      ))} */}
    </Provider>
  );
};

export default Paginator;
