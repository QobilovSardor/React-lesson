import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Amaliyot from './Amaliyot'
// import App from './App';

const Book = ({name, year, price, children}) => {
  return (
    <div>
      <h2>{(name) ? <span>{name}</span> : 'Default book'}</h2>
      <p>{year}</p>
      <p>{price}</p>
      <b>{children}</b>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Book name='JS for beginers' year='2021' price='50'>
        Extra inform
      </Book>
      <Book name='React for beginers' year='2022' price='100' />
      <Book name='Vue for beginers' year='2023' price='150' />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />,
    <Amaliyot />
  </React.StrictMode>
);