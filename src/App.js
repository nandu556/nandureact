import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Greetings from './Greetings';

function App() {
  return (

        <div className="App">
           <Greetings></Greetings>
           <Welcome name="Nandu">
              <h3>Hello nandu hi hw r u</h3>
              <h4>hkjlj</h4>
           </Welcome>
           
           <Welcome name="nanduch">
           <h3>Hello nanduch hw r u</h3>
           </Welcome>

           <Welcome name="nch">
           <h3>Hello nch hw r u</h3>
           </Welcome>
      
        </div>
  );
}

export default App;
