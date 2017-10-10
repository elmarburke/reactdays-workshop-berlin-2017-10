// src/components/Compose.js

import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  height: 5em;
  background-color: #363636;
  color: #dcdcdc;
  border: none;
  width: 100%;
`;

const ComposeFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
`;

const SendButton = styled.button`
  border: #9b58b5 2px solid;
  border-radius: 4px;
  cursor: pointer;
`;

import ContentWrapper from "./Content";

class Compose extends React.Component {
  render() {
    return (
      <ContentWrapper>
        <form>
          <TextArea>Hallo React Days Tag 2</TextArea>
          <ComposeFooter>
            <SendButton>Teilen</SendButton>
          </ComposeFooter>
        </form>
      </ContentWrapper>
    );
  }
}

export default Compose;
