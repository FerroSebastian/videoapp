import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  link
} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import History from './Components/History/History';
import News from './Components/News/News';




function App() {

  var nombres = ['diego', 'hector', 'rupencio', 'guilligan y su pandilla'];
  
  return (
    <Router>
      <div>

        <Navbar />
        <Switch>
          <Route exact path="/">
            <Content />
          </Route>
          <Route path="/History">
            <History />
          </Route>
          <Route path="/Advertising">
            {/* <Advertising /> */}
            <div className="App">
                <ul>
                  {nombres.map((item)  => ( <li>Nombre: {item}</li> ))}
                  
                </ul>
            </div>
          </Route>
          <Route path="/News">
            <News />
          </Route>
          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
