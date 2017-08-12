import React from "react";
import styled, { keyframes } from "styled-components";

const morph = keyframes`
  0% { border-radius: 5px; }
  50% { border-radius: 50%; }
  100% { border-radius: 5px; }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Ball = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: #08aeea;
  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
  animation: ${morph} 1s linear infinite, ${spin} 1s ease-in-out infinite;
`;

const App = () => <Ball />;

export default App;
