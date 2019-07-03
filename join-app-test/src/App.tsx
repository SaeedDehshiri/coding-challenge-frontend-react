import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import HomeItemDetail from './components/HomeItemDetails/HomeItemDetails';

const App: React.FC = () => {
  return (
    <div className="App">
      {<Header />}
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/case/:id" exact component={HomeItemDetail} />
      </Router>
    </div>
  );
}

export default App;
