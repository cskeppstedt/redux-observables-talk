import React from "react";
import Button from "./button";
import Search from "./search";
import Spinner from "./spinner";
import Text from "./text";
import Toolbar from "./toolbar";
import styled from "styled-components";

export default props => (
  <div>
    <Toolbar>
      <Button onClick={() => props.startRandomJokeRequest()}>Random</Button>
      <Search
        onChange={e => props.searchTextChanged(e.target.value)}
        value={props.searchText}
      />
      {props.isLoading && <Spinner />}
    </Toolbar>
    <Text>{props.text}</Text>
  </div>
);
