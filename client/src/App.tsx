import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AuthProvider } from "./context/auth";
import { Home } from './pages/Home';
import { Member } from './pages/Member';


const App: React.FC = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/member" component={Member} />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
