import React from 'react';
import { Route } from 'react-router-dom';
import { EnhancedHeader } from '../molecules/header';
import Homepage from '../organisms/homepage';
import Shop from '../organisms/shop';
import './app.scss';

export function App() {
  return (
     <div className="app">
      <EnhancedHeader />
      <div>
        <Route exact path='/' component={Homepage}></Route>
        <Route path='/gear-shop' component={Shop}></Route>
      </div>
    </div>
  );
}
