import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidenav from "./components/Sidenav";

import { MediaQuery, Spacing, sidenavWidth } from "./config/style";
import GlobalStyle from "./GlobalStyle";

import { headerHeight } from "./config/style";
import { AuthProvider } from "./context/AuthProvider";

import RequireAuth from "./hoc/RequireAuth";
import RoutesRenderer from "./components/RoutesRenderer/RoutesRenderer";

const NavAndMain = styled.div`
  min-height: calc(100% - ${headerHeight});
  display: flex;
`;

const Main = styled.main`
  padding-top: ${Spacing[16]};
  width: calc(100% - ${sidenavWidth});
  margin-right: 0;
  margin-left: auto;
  min-height: 100%;

  ${MediaQuery.xs} {
    width: 100%;
    padding-left: 50px;
  }
`;

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <NavAndMain>
          <Sidenav />
          <Main>
            <RoutesRenderer />
          </Main>
        </NavAndMain>
        <GlobalStyle />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
