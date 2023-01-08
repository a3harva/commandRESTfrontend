import React from "react";
import {BrowserRouter,Route} from 'react-router-dom';
import App from "./App";
import Commands from "../src/components/Commnds"

const Routes = () =>{

<BrowserRouter>

<Routes>

<Route exact path='/' component={App}/>
<Route exact path='/commands' component={Commands}/>
{/* <Route exact path='/users' component={Users}/> */}


</Routes>

</BrowserRouter>


}


export default Routes;