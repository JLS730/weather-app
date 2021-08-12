import React from 'react';
import ReactDOM from 'react-dom';

// CSS Import
import './index.css';

// Components Import
import Weather from './components/Weather';

const Website = () => {
  return (
    <React.Fragment>
      <Weather />
    </React.Fragment>
  )
}

ReactDOM.render(<Website />, document.getElementById('root'))