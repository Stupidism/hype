import React from 'react';

import styled from 'styled-components';

const StyledLucasComponents = styled.div`
  color: pink;
`;

export const LucasComponents = props => {
  return (
    <StyledLucasComponents>
      <h1>Welcome to lucas-components component!</h1>
    </StyledLucasComponents>
  );
};

export default LucasComponents;
