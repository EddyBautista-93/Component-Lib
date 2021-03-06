
import React from "react";

import styled from "@emotion/styled";

const Wrapper = styled.button`
  text-transform: uppercase;
  background: #5cdb95;
  color: #05385b;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
`;

export default function Button({ text }) {
  return <Wrapper>{text}</Wrapper>;
}

