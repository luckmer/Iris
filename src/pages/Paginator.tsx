import React from "react";
import { Provider, useSelector } from "react-redux";
import store from "../redux/store";

const Paginator = () => {
  return <Provider store={store}></Provider>;
};

export default Paginator;
