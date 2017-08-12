import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const morph = keyframes`
  0% { border-radius: 5px; }
  50% { border-radius: 50%; }
  100% { border-radius: 5px; }
`;

const Ball = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: ${props => props.theme.gradient};
  animation: ${morph} 2s linear infinite, ${spin} 1s ease-in-out infinite;
`;

const App = () => <Ball />;

export default App;
