import React from 'react';
import mobile from '../data/mobiledata.json'
import icon from '../profile.svg'
import Resume from './Resume'
import {Link} from 'react-router-dom'
import ReactDOM from "react-dom";

let Home=()=>{
    let mobiles_lists= mobile.mobiles;
    
    
    return(
       <div className="row justify-content-center"  >
           {mobiles_lists.map( (nandu,index)=>(
               <section className="col-lg-4 col-md-4 col-sm-10 mt-2" key={index}>
                   <div className="card">

                       <article className="card-body" style={{textAlign:"left"}}>
                          <img src={ nandu.mobile.image} style={{width:"10%"}}/>
                          <h6>Mobile Name: { nandu.mobile.modelname}</h6>
                          <h6>Model Number:{ nandu.mobile.modelnumber}</h6>
                          <h6>Color:{nandu.mobile.color}</h6>
                          <h6>Display size:{nandu.mobile.displaysize}</h6>
                          <h6>Intenal storage:{nandu.mobile.internalstorage}</h6>
                          <h6>RAM :{nandu.mobile.ram}</h6>
                          <h6>In The Box :{nandu.mobile.inthebox}</h6>
                        </article>
              
                   </div>
               </section>

           )

           )}
        </div>
    );
}

export default Home;