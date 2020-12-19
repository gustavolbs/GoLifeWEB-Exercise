import React, { useState } from "react";

import Routes from "./Routes";
import Content from "./Pages/Content";
import ContentContext, { defaultContent } from "./Contexts/content";
import TitleContext, { defaultTitle } from "./Contexts/pageTitle";

import "font-awesome/css/font-awesome.min.css";
import "./Styles/global.css";

function App() {
  const [content, setContent] = useState(defaultContent);
  const [pageTitle, setPageTitle] = useState(defaultTitle);

  return (
    <>
      <ContentContext.Provider value={{ state: content, setState: setContent }}>
        <TitleContext.Provider
          value={{ title: pageTitle, setTitle: setPageTitle }}
        >
          <Routes />
          <Content />
        </TitleContext.Provider>
      </ContentContext.Provider>
    </>
  );
}

export default App;
