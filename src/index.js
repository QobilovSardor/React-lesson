import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

const Book = (props) => {
  console.log(props);
  return React.createElement('div', {}, [
    React.createElement('h2', {}, props.name),
    React.createElement('h3', {}, props.year),
    React.createElement('p', {}, props.price),
  ])
}

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', { id: 'title', className: 'heading' }, 'Online kiborlar do\'koniga hush kelibsiz'),
    React.createElement(Book, { name: 'JS for beginners', year: 2021, price: 50 }),
    React.createElement(Book, { name: 'VueJS beginners', year: 2022, price: 100 }),
    React.createElement(Book, { name: 'ReactJS for beginners', year: 2023, price: 150 }),
  ])
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);