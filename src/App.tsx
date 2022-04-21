import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import { ColorPalette } from "./config/style";
import GlobalStyle from "./GlobalStyle";
import Homepage from "./pages/Homepage";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${ColorPalette.background};
`;

const NavAndMain = styled.div`
  height: 100%;
  display: flex;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <>
      <AppWrapper>
        <Header />
        <NavAndMain>
          <Sidenav/>
          <Main>
            <Homepage />
          </Main>
        </NavAndMain>
      </AppWrapper>
      <GlobalStyle />
    </>
  );
}

export default App;
