import React, { useState } from 'react';
import logo from './logo.svg';
import { defineCustomElements } from '@telepo/dstny-ds/loader';
import { DstnyButton } from '@telepo/dstny-ds/dist/dstny-ds-react';
import './App.css';

defineCustomElements();

function App() {

  const [ size, setSize ]  = useState('small');
  const [ color, setColor ]  = useState('primary');

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  
        <div className="btn-group">
          <button type="button" onClick={() => setSize('small')}>Size sm</button>
          <button type="button" onClick={() => setSize('large')}>Size L</button>
          <button type="button" onClick={() => setSize('extra-large')}>Size XL</button>
          <button type="button" onClick={() => setColor('primary')}>Color Primary</button>
          <button type="button" onClick={() => setColor('secondary')}>Color Secondary</button>
        </div>
        <div className="dstny-base-theme">
            <DstnyButton 
              type="button"
              size={size}
              variant={color}
              disabled='false'
              label='Dstny Button CTA'
            />
        </div>
      </header>
    </div>
  );
}

export default App;
