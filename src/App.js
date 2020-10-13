import React from 'react';
import './App.css';
import Tonya from "./Tonya/tonya";
import Tbot from "./Tonya/Components/Tbot";
import helloWorld from './Assets/helloWorld.png';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router basename={'/'}>
    <div className={'appContainer'}>
      <Switch>
        <Route exact path={'/'} component={Tonya}/>
        <Route exact path={'/tbot'} component={Tbot}/>
      </Switch>
  
      <div className={'footContainer'}>
      
      <div className={'copyright'}> &copy; 1987 Tonya Judkins </div>
      
      <footer className={'footer'}>
        <img src={helloWorld} className={'helloWorld'} width={'60%'} alt={'hello world'}/>
      </footer>
      
      </div>
    </div>
    </Router>
  );
}

export default App;
