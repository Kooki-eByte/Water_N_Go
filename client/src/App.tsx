import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AddPlant } from "./pages/AddPlant";
import { Home } from './pages/Home';
import { Member } from './pages/Member';


const App: React.FC = () => {
  const { isLoading, isAuthenticated } = useAuth0()

  if (isLoading) return <div>Loading ...</div>

  if (isAuthenticated) return (
    <div>
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/member" component={Member} />
        <Route exact path="/addplant" component={AddPlant} />
      </Router> 
    </div>
  )

  return (
    <div>
      <Router>
        <NavBar />
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
