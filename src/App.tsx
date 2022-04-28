import React from "react";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";
import { MediaQuery, Spacing, sidenavWidth, headerHeight } from "@config/style";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@context/AuthProvider";

import Header from "@components/Header";
import Sidenav from "@components/Sidenav";
import RoutesRenderer from "@components/RoutesRenderer/RoutesRenderer";
import { HelmetProvider } from "react-helmet-async";

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
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default App;
