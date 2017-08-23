import React from 'react';
import { render } from 'react-dom';

const MyTitle = props =>
  <div>
    <h1 style={{ color: props.color }}>
      {props.title}
    </h1>
  </div>;

const MyFirstComponent = () =>
  <div id="my-first-component">
    <MyTitle title="Game of Throne" color="red" />
    <MyTitle title="House of Cards" color="YellowGreen" />
    <MyTitle title="The Office" color="Peru" />
    <MyTitle title="Rick and Morty" color="blue" />
  </div>;

render(React.createElement(MyFirstComponent), document.getElementById('app'));
