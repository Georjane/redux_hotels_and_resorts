import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
