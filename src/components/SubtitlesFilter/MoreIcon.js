/* @flow */
import React, { PureComponent } from "react";
import styled from "styled-components";

const Svg = styled.svg`
  width: 18px;
  height: 18px;
  vertical-align: middle;
  fill: currentColor;
`;

export default () =>
  <Svg
    version="1.1"
    viewBox="0 0 32 32"
    width="32"
    height="32"
    aria-hidden="false"
  >
    <path
      d={`M7 15.5c0 1.9-1.6 3.5-3.5 3.5s-3.5-1.6-3.5-3.5
    1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5zm21.5-3.5c-1.9 0-3.5 1.6-3.5
    3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zm-12.5 0c-1.9 0-3.5
    1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z`}
    />
  </Svg>;
