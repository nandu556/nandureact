import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Greet from './Greetings';
import Sample from './SampleHooks';
import Home from "./components/Home"
import Resume from "./components/Resume"
import Mobile from "./components/Mobile"


function App() {
  return (

        <div className="App">
         {/*<Welcome name="Nandu">
              <h3>Hello nandu hi hw r u</h3>
              <h4>hkjlj</h4>
           </Welcome>
           
           <Welcome name="nanduch">
           <h3>Hello nanduch hw r u</h3>
           </Welcome>

           <Welcome name="nch">
           <h3>Hello nch hw r u</h3>
          </Welcome>*/}
          {/* <Greet></Greet>*/}
          {/*<Sample></Sample>*/}
          
          
          <Mobile></Mobile>
          <Home></Home>

               
         </div>
  );
}

export default App;
