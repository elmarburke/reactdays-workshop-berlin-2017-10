import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';

import Content from '../components/Content';
import Status from '../components/Status';
import Logo from '../components/Logo';
import TopBarWrapper from '../components/TopBarWrapper';
import HeaderLink from '../components/HeaderLink';

storiesOf('Content', module).add('...', () => <Content>Some Content</Content>);

storiesOf('Status', module)
  .addDecorator(StoryRouter())
  .add('with content', () => (
    <Status
      status={{
        time: '2017-10-10T09:00:00',
        text: 'Die ReactDays sind toll',
        _id: '123',
      }}
    />
  ));

storiesOf('TopBar Components', module)
  .addDecorator(StoryRouter())
  .add('With background', () => (
    <div style={{ backgroundColor: '#444', padding: 10 }}>
      <Logo />
    </div>
  ))
  .add('with Logo and links', () => (
    <TopBarWrapper>
      <Logo />
    </TopBarWrapper>
  ))
  .add('HeaderLink', () => (
    <div style={{ backgroundColor: 'black' }}>
      <HeaderLink to="/">Ein Link</HeaderLink>
      <HeaderLink to="/">Noch Link</HeaderLink>
      <HeaderLink to="/">Letzter Link</HeaderLink>
    </div>
  ));
