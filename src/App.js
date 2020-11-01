import React from 'react';
import Navbar from "./Componens/Navbar.js";
import Index from "./Componens/index.js";
import Contact from "./Componens/Contact.js";

import Lyrics from "./Componens/Tracks/Lyrics.js";
import { Provider } from "./context.js";
import {BrowserRouter, Switch,Route} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Provider>
    <div>
    
       
           <BrowserRouter>
               <Navbar/>
                <Switch>
                 
                   
                   <Route exact path="/" component={Index}/>
                    <Route exact path="/conatct" component={Contact}/>
                    <Route exact path="/lyrics/track/:id" component={Lyrics}/>
               </Switch>
           </BrowserRouter>
             
       </div>
           
    
     </Provider>
  );
}

export default App;
