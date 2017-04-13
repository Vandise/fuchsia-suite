import React from 'react';
import ReactDOM from 'react-dom';

const el = document.getElementById('app');

const Screen = () => {
  return (
    <div>
      <p>Fetching config data and so on</p>
    </div>
  );
};

export default ReactDOM.render(<Screen />, el);