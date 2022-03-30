import React from "react";
import { Provider } from "react-redux";
import { Route, useLocation } from "react-router-dom";
import store from "../redux/store";
import routes from "./index/index";

const Paginator = () => {
  const location = useLocation();

  return (
    <Provider store={store}>
      {routes.map(({ path }) => (
        <Route path={path} />
      ))}
    </Provider>
  );
};

export default Paginator;
