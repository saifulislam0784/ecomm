import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <Fragment>
        <Header></Header>
        <Shop></Shop>
    </Fragment>
  );
}

export default App;
