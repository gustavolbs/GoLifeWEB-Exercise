import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Navbar from "../Components/Navbar";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Navbar />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
