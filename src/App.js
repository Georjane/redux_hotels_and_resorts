import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App(props) {
  const { storestate } = props;

  return (
    <BrowserRouter>
      {storestate[0] === 'LOGGED_IN' ? <Navbar /> : <h1>PLEASE OUT</h1>}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  storestate: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  storestate: state,
});

export default connect(mapStateToProps)(App);
