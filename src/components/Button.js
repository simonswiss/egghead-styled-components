import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #a04ed9;
  color: white;
  font-size: 1rem;
  padding: .75rem 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;

export default props => <Button>{props.children}</Button>;
