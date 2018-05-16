import React from 'react';
import MessagePresenter from './client/components/MessagePresenter';
import App from './client/components/App.react';

const Foo = ({ props }) => (
  <div>foo</div>
);

export default [
  {
    path: '/',
    Component: App,
    children: [
      {
        Component: () => 
        <div>Main
        <MessagePresenter/>
        </div>,
      },
      {
        path: 'foo',
        getComponent: Foo,
      },
    ],
  },
];
