import './StyleSheets/App.css'
import NavBar from './Components/Navbar';
import { Route, Switch } from 'react-router';
import { Container } from 'semantic-ui-react'
import Home from './pages/Home';
import NoMatch from './Components/NoMatch';
import Login from './Components/Login';
import Register from './Components/Register';
import EditUser from './Components/EditUser'
import FetchUser from './Components/FetchUser';
import Rewards from './pages/Rewards';
import RewardForm from './Components/RewardForm';
import Landing from './pages/Landing';
import Earn from './pages/Earn';

// import Search from './pages/Search'
// import ScanResult from './pages/ScanResult'
// import ShowQR from './pages/ShowQR'
// import Dashboard from './pages/Dashboard'
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <>
      <NavBar />
      <FetchUser>
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/edit_user' component={EditUser} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/landing' component={Landing} />
            <Route exact path='/earn/:userpunchcard_id' component={Earn} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/scan_result' component={ScanResult} />
            <Route exact path='/showQR' component={ShowQR} />
            <Route exact path='/dashboard' component={Dashboard} />


            <Route component={NoMatch} />
            <ProtectedRoute exact path='/rewards' component={Rewards} />
            <ProtectedRoute exact path='/rewardform' component={RewardForm} />

          </Switch>
        </Container>
      </FetchUser>

    </>
  );
}

export default App;
