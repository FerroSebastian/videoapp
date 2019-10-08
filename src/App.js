import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
