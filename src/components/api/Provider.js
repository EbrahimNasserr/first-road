"use client";

import { Provider } from "react-redux";
import Store from "./Store";

const ProviderRedux = ({ children }) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default ProviderRedux;