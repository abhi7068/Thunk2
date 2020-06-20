import React, { Component } from 'react'
import App from "./App";
import {Link,Route,Switch} from "react-router-dom";
import DisplayDistrict from './DisplayDistrict';

const Routes =()=>{
    return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/map/:login" component={(props)=><Map{...props}/>} />
     
    </Switch>
    )
}
export default Routes;