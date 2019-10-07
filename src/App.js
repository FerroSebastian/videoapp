import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import First from './Components/First/First';
import Second from './Components/Second/Second';
import Third from './Components/Third/Third';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <First />
      <Second />
      <Third />
      <Footer />
    </div>
  );
}

export default App;
