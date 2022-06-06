import React from 'react';
import { Header, MainPage } from 'components';
import './App.scss';

function App() {


  return (
    <div className="App">
      <Header />
      <div className='ContentsArea'>
        <MainPage />
      </div>
    </div>
  );
}

export default App;
