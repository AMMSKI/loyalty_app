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
import Earn from './pages/Earn';
import Search from './pages/Search'
import ScanResult from './pages/ScanResult'
import ShowQR from './pages/ShowQR'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './Components/ProtectedRoute';
import RewardForm from './Components/RewardForm';
import Footer from './Components/Footer';
import Landing from './pages/Landing';

function App() {
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <NavBar />
          <div>
            <FetchUser>
              <Container style={{ paddingTop: '30px' }}>
                <Switch>
                  <Route exact path='/' component={Landing} />
                  <ProtectedRoute exact path='/home' component={Home} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/edit_user' component={EditUser} />
                  <Route exact path='/earn/:userpunchcard_id' component={Earn} />
                  <Route exact path='/search' component={Search} />
                  <Route exact path='/scan_result' component={ScanResult} />
                  <Route exact path='/showQR' component={ShowQR} />
                  <Route exact path='/dashboard' component={Dashboard} />
                  <ProtectedRoute exact path='/rewards' component={Rewards} />
                  <ProtectedRoute exact path='/rewardform' component={RewardForm} />
                  <Route component={NoMatch} />
                </Switch>
              </Container>
            </FetchUser>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
