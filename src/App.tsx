import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import Homepage from "./pages/Homepage";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const NavAndMain = styled.div`
  height: 100%;
  display: flex;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(255, 233, 172, 0.267), #ffe6a36c);
`;

function App() {
  return (
    <>
      <AppWrapper>
        <Header />
        <NavAndMain>
          <nav>The navigation will go here</nav>
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
