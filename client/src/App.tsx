import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from './pages/Home';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
