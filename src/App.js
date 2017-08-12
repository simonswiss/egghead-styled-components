import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.theme.base};
  color: white;
  font-size: 1rem;
  padding: .75rem 2rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: none;
  border-radius: 4px;
  margin: .5rem;
  transition: all 0.1s;

  &:hover {
    transform: translateY(1px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  }
`;

const ButtonDanger = Button.extend`background: ${props => props.theme.danger};`;
const ButtonCrazy = Button.extend`background: ${props => props.theme.crazy};`;

/* ============================== */
/* ===== the main component ===== */
/* ============================== */
const App = () =>
  <div>
    <Button>Basic button</Button>
    <ButtonDanger>Watch out now!</ButtonDanger>
    <ButtonCrazy>Crazy Gradient!</ButtonCrazy>
  </div>;

export default App;
