import React, { Component } from "react";
import { func } from "prop-types";
import ContentWrapper from "./Content";
import styled from "styled-components";

const TextArea = styled.textarea`
  height: 5em;
  background-color: #363636;
  color: #dcdcdc;
  border: none;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5em 3em;
  display: block;
  resize: none;
  font-size: 1em;
  &:focus {
    outline: none;
  }
`;

const ComposeFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5em 3em;
`;

const SendButton = styled.button`
  background-color: #363636;
  border: #9b58b5 2px solid;
  border-radius: 4px;
  padding: 0.25em 1em;
  color: #dcdcdc;
  font-size: 1em;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

class Compose extends Component {
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
      <ContentWrapper noPadding>
        <form onSubmit={this.handleSubmit}>
          <TextArea
            type="text"
            placeholder="Was passiert gerade?"
            innerRef={ref => (this.ref = ref)}
          />
          <ComposeFooter>
            <SendButton>Teilen</SendButton>
          </ComposeFooter>
        </form>
      </ContentWrapper>
    );
  }
}

export default Compose;
