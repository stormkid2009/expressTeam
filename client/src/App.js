import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Home from './components/home';
import Navbar from './components/navbar';
import Order from './components/orderForm';
import Agent from './components/agentForm';
import OrdersList from './components/ordersList';
import AgentsList from './components/agentsList';
import Reseller from './components/resellerForm';
import ResellersList from './components/resellersList';
import Update from './components/update';
import PickUp from './components/pickupForm';


function App() {
    return (
        <Router>
           <div className="container-fluid">
               <Navbar />
               <br />
               <Route path="/order" component={Order}/>
               <Route path = "/ordersList" component={OrdersList} />
               <Route path="/agent" component={Agent}/>
               <Route path="/agentsList" component={AgentsList}/>
               <Route path="/reseller" component={Reseller} />
               <Route path="/resellersList" component={ResellersList} />
               <Route path="/update" component={Update} />
               <Route path="/pickup" component={PickUp} />
               <Route  path="/" exact component={Home}/>
           </div>
        </Router>
    )
}

export default App
