import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


import Navbar from './components/Navbar'
import Footer from './components/Footer'

import About from './pages/About'
import Daily from './pages/Daily'
import Stats from './pages/Stats'
import Landing from './pages/Landing'
import Login from './pages/Login'

function App() {
  return (
    <div className = "App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/home" component={Landing}/>
          <Route path="/about" component={About}/>
          <Route path="/daily" component={Daily}/>
          <Route path="/stats" component={Stats}/>
        </Switch>
      
        <Footer />
      </Router>
    </div>
  );
}

export default App