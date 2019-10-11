import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  link
} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <Router>
      <div>

        <Navbar />
        <Switch>
          <Route exact path="/">
            <Content />
          </Route>
          <Route path="/History">
            {/* <History /> */}
            <h2>afdafs</h2>
          </Route>
          <Route path="/Advertising">
            {/* <Advertising /> */}
            <h2>afdafs</h2>

          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
