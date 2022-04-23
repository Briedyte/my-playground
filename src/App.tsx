import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidenav from "./components/Sidenav";

import Homepage from "./pages/Homepage";

import { ColorPalette, MediaQuery, Spacing } from "./config/style";
import GlobalStyle from "./GlobalStyle";
import Authentication from "./pages/Authentication";
import NotFound from "./pages/NotFound";
import CommingSoon from "./pages/CommingSoon";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${ColorPalette.gradientBackground};
`;

const NavAndMain = styled.div`
  height: 100%;
  display: flex;
`;

const Main = styled.main`
  padding-top: ${Spacing[16]};
  width: 100%;
  height: 100%;
  ${MediaQuery.xs} {
    padding-left: 50px;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <NavAndMain>
          <Sidenav />
          <Main>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/authentication" element={<Authentication />} />
              <Route path="/comming-soon" element={<CommingSoon />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Main>
        </NavAndMain>
      </AppWrapper>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
