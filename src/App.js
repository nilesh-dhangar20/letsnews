import React from 'react'
import Navbar from './Component/Navbar'
import {Switch,Route} from 'react-router-dom';
import Business from './Component/Business';
import Entertainment from './Component/Entertainment';
import General from './Component/General';
import Health from './Component/Health';
import Technology from './Component/Technology';
import Science from './Component/Science';
import Sports from './Component/Sports';
const App = () => {
  return (
    <>
   <Navbar/>
   <Switch>
           <Route exact path="/" component={General}/>
          <Route exact path="/business" component={Business} />
          <Route exact  path="/entertainment" component={Entertainment}/>
          <Route exact path="/health" component={Health}/>
          <Route exact path="/technology" component={Technology}/>
          <Route exact path="/science" component={Science}/>
          <Route exact path="/sports" component={Sports}/>
          
   </Switch>
  
    </>
  )
}

export default App
