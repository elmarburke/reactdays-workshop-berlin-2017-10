// src/components/Compose.js

import React from "react";
import { func } from "prop-types";
import styled from "styled-components";
import ContentWrapper from "./Content";

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

class Compose extends React.Component {
  static propTypes = {
    onSubmit: func.isRequired
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.ref.value);
    this.ref.value = "";
  };

  render() {
    return (
      <ContentWrapper>
        <form onSubmit={this.handleSubmit}>
          <TextArea innerRef={ref => (this.ref = ref)}>
            Hallo React Days Tag 2
          </TextArea>
          <ComposeFooter>
            <SendButton>Teilen</SendButton>
          </ComposeFooter>
        </form>
      </ContentWrapper>
    );
  }
}

export default Compose;
