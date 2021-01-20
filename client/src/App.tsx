import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AuthProvider } from "./context/auth";
import { Home } from './pages/Home';


const App: React.FC = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <NavBar />
          <Route exact path="/" component={Home} />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
