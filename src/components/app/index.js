import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedHeader } from '../molecules/header';
import Homepage from '../organisms/homepage';
import Shop from '../organisms/shop';
import './app.css';

export function App() {
  return (
     <div className="app">
      <ConnectedHeader />
      <div>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/gear-up' component={Shop}></Route>
      </div>
    </div>
  );
}
