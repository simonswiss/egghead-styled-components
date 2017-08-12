import React from "react";
import styled, { keyframes } from "styled-components";

const spinBounce = keyframes`
	0% { transform: translateY(0) rotate(0deg); }
	50% { transform: translateY(40px) rotate(90deg); }
  100% { transform: translateY(0) rotate(180deg); }
`;

const hue = keyframes`
  0% { background-color: tomato; }
  50% { background-color: deeppink; }
  100% { background-color: tomato; }
`;

const shape = keyframes`
  0% { border-radius: 5px; }
  50% { border-radius: 50%; }
  100% { border-radius: 5px; }
`;

const Ball = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: 0 auto;
  animation: ${spinBounce} .5s linear infinite, ${shape} 2s linear infinite,
    ${hue} 2s linear infinite;
`;

const App = () =>
  <div>
    <Ball />
  </div>;

export default App;
