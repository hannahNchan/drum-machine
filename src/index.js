import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import reportWebVitals from './reportWebVitals';
import App from './containers/Home';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Container maxWidth={false} fixed >
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
