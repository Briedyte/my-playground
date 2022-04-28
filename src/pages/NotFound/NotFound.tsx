import React from "react";
import styled from "styled-components";

import { FontSize } from "../../config/style";

const Maincontainer = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  text-align: center;
`;

const StyledSpan = styled.span`
  font-size: ${FontSize[80]};
`;

const NotFound = () => {
  return (
    <Maincontainer>
      <div>
        <p>
          <StyledSpan>404</StyledSpan>
        </p>
        <p>It is not only that tha page you are looking for is not found...</p>
        <p>...but also the "Not Found" page is not properly styled yet!</p>
      </div>
    </Maincontainer>
  );
};

export default NotFound;
