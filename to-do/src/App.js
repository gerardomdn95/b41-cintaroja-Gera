// Dentro de APP vamos a llamar a nuestros containers
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TaskContainer from './containers/TaskContainer';
import CreateContainer from './containers/CreateContainer';
import NotFound from './containers/NotFound';
import Navbar from './components/Navbar';

// Creamos las reglas de routing

// SPA => Single Page App
// PWA => Progresive Web App
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={TaskContainer} />
        <Route exact path="/create-task" component={CreateContainer} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
