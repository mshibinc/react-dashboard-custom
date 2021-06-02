import React, { useState } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

const StyledExampleWrapper = styled.div`
  position: relative;
  overflow: auto;
  flex: 0 1 auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* @media (min-width: ${(p) => p.theme.screenWidthXl}) {
    flex-direction: ${(p) => (p.isDashboard ? "column" : "row")};
  } */
`;
const AppRoute = ({ path, exact, component }) => {
  return (
    <Route exact={exact} path={path}>
      <StyledExampleWrapper>
        {React.createElement(component)}
      </StyledExampleWrapper>
    </Route>
  );
};
export default AppRoute;
