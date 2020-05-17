import React from 'react';
import './App.css';
import Tonya from "./Tonya/tonya";

function App() {
  return (
    <div>
      <Tonya />
      
      <footer className={'footer'}>
          <div className={'talkBubble'}> Hello World</div>
          <div className={'beautiful'}> Hello Beautiful</div>
      </footer>
      
    </div>
  );
}

export default App;
