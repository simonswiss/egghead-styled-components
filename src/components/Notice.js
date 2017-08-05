import React from "react";
import styled from "styled-components";

const Notice = styled.div`
  border: solid 3px ${props => props.theme.primary};
  background: #f7f7f7;
  padding: 1rem;
  margin: 2.5rem 0;
  border-radius: 6px;
`;

const Text = styled.p`
  margin: 0;
`;

export default props =>
  <Notice>
    <Text>{props.children}</Text>
  </Notice>;
