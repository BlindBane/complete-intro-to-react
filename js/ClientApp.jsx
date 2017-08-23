const MyTitle = () => React.createElement('div', null, React.createElement('h1', null, 'My title'));

const MyFirstComponent = () =>
  React.createElement(
    'div',
    null,
    React.createElement(MyTitle),
    React.createElement('h1', null, 'This is my first compponent')
  );

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
