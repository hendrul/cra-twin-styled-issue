

import React from "react";
//import {jsx} from '@emotion/react'
import tw, { css, styled } from "twin.macro";

const C  = styled("h1")`
  ${tw`bg-red-500`}
  ${css`
    width: 100%; 
    height: 
    100vh;
  `}
`

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <C></C>
      <h2
        css={[
          `color: blue`
        ]}
        tw="bg-indigo-300 border-red-500 border-2"
      >
        Start editing to see some magic happen!
      </h2>
    </div>
  );
}
