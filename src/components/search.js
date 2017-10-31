import React from "react";
import styled from "styled-components";

const Searchbox = styled.input.attrs({
  type: "search"
})`
  background: #303030;
  color: #f0f0f0;
  font-family: Helvetica, segui;
  font-size: 26px;
  font-weight: 600;
  flex-grow: 1;
  padding: 12px 16px;
  outline: none;
  border: none;
`;

export default props => (
  <Searchbox placeholder="Search for joke..." onChange={props.onChange} />
);
