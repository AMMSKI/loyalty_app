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
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './Components/ProtectedRoute';
import About from './pages/About';
import EmployeeView from './Components/EmployeeView';
import RewardForm from './Components/RewardForm';
import PunchCardAdmin from './pages/PunchCardAdmin';
import AddQR from './pages/AddQR';
import Footer from './Components/Footer';
import RewardQR from './pages/RewardQR';
import RewardAdmin from './pages/RewardAdmin';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import ProfileUpload from './pages/ProfileUpload';
import Charting from './pages/Charting';
import Admin from './pages/Admin';


function App() {
  return (
    <>

      <div className="page-container">
        <div className="content-wrap">
          <NavBar />
          <div>
            <FetchUser>
              <Container style={{ paddingTop: '20px' }}>
                <Switch>
                  <Route exact path='/' component={Landing} />
                  <ProtectedRoute exact path='/home' component={Home} />
                  <Route exact path='/profile' component={Profile} />
                  <Route exact path='/edit_user' component={EditUser} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/rewards' component={Rewards} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/landing' component={Landing} />
                  <Route exact path='/earn/:userpunchcard_id' component={Earn} />
                  <Route exact path='/search' component={Search} />
                  <Route exact path='/scan_result' component={ScanResult} />
                  <Route exact path='/addQR/:user_id/:punchcard_id' component={AddQR} />
                  <Route exact path='/punchcardAdmin/:user_id/:userpunchcard_id' component={PunchCardAdmin} />
                  <Route exact path='/addQR/:user_id/:punchcard_id' component={AddQR} />
                  <Route exact path='/rewardQR/:reward_id/:userpunchcard_id' component={RewardQR} />
                  <Route exact path='/charting' component={Charting} />
                  <Route exact path='/admin' component={Admin} />

                  <Route exact path='/rewardAdmin/:reward_id/:userpunchcard_id' component={RewardAdmin} />
                  <Route exact path='/profileupload/:user_id' component={ProfileUpload} />   
                  <Route exact path='/dashboard' component={Dashboard} />
                  <Route exact path='/employeeview/:punch_id' component={EmployeeView} />
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
