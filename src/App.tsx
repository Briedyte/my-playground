import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidenav from "./components/Sidenav";

import Homepage from "./pages/Homepage";
import Authentication from "./pages/Authentication";
import NotFound from "./pages/NotFound";
import CommingSoon from "./pages/CommingSoon";

import { MediaQuery, Spacing } from "./config/style";
import GlobalStyle from "./GlobalStyle";

import { headerHeight } from "./config/style";
import { AuthProvider } from "./context/AuthProvider";
import Userpage from "./pages/Userpage";
import RequireAuth from "./hoc/RequireAuth";

const NavAndMain = styled.div`
  height: ${100 - headerHeight}%;
  display: flex;
`;

const Main = styled.main`
  padding-top: ${Spacing[16]};
  width: 100%;
  min-height: inherit;
  ${MediaQuery.xs} {
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
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/authentication" element={<Authentication />} />
              <Route path="/comming-soon" element={<CommingSoon />} />
              <Route element={<RequireAuth />}>
                <Route path="/user-page" element={<Userpage />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Main>
        </NavAndMain>
        <GlobalStyle />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
