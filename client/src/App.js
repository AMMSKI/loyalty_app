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
import PunchCardForm from './Components/PunchCardForm';
import EmployeeView from './Components/EmployeeView';
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
import PunchcardImageUpload from './Components/PunchcardUpload';
import RewardForm from './Components/RewardForm';
import PunchCardEdit from './Components/PunchCardEdit';
import PunchCardSettings from './pages/PunchCardSettings';

function App() {
  return (
    <div>
      <div className="page-container">
        <div className="content-wrap">
          <NavBar />
          <FetchUser>
            <Container style={{ paddingTop: '20px' }}>
              {/* <Container> */}
              <Switch>
                <Route exact path='/' component={Landing} />
                <ProtectedRoute exact path='/home' component={Home} />
                <ProtectedRoute exact path='/search' component={Search} />
                <ProtectedRoute exact path='/dashboard' component={Dashboard} />
                <ProtectedRoute exact path='/rewards' component={Rewards} />
                <ProtectedRoute exact path='/rewardform' component={RewardForm} />
                <ProtectedRoute exact path='/profile' component={Profile} />
                <ProtectedRoute exact path='/edit_user' component={EditUser} />
                <ProtectedRoute exact path='/employeeview' component={EmployeeView} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/earn/:userpunchcard_id' component={Earn} />
                <Route exact path='/scan_result' component={ScanResult} />
                <Route exact path='/showQR' component={AddQR} />
                <Route exact path='/rewardQR/:reward_id/:userpunchcard_id' component={RewardQR} />
                <Route exact path='/charting' component={Charting} />
                <Route exact path='/admin' component={Admin} />
                <Route exact path='/rewardAdmin/:reward_id/:userpunchcard_id' component={RewardAdmin} />
                <Route exact path='/profileupload/:user_id' component={ProfileUpload} />
                <ProtectedRoute exact path='/earn/:userpunchcard_id' component={Earn} />
                <Route exact path='/search' component={Search} />
                <Route exact path='/scan_result' component={ScanResult} />
                <ProtectedRoute exact path='/addQR/:user_id/:punchcard_id' component={AddQR} />
                <ProtectedRoute exact path='/punchcardAdmin/:user_id/:userpunchcard_id' component={PunchCardAdmin} />
                <ProtectedRoute exact path='/rewardQR/:reward_id/:userpunchcard_id' component={RewardQR} />
                <Route exact path='/charting' component={Charting} />
                <Route exact path='/admin' component={Admin} />
                <Route exact path='/pcimageupload' component={PunchcardImageUpload} />

                <ProtectedRoute exact path='/rewardAdmin/:reward_id/:userpunchcard_id' component={RewardAdmin} />
                <Route exact path='/profileupload/:user_id' component={ProfileUpload} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/employeeview/:punch_id' component={EmployeeView} />
                <ProtectedRoute exact path='/rewards' component={Rewards} />
                <ProtectedRoute exact path='/rewardform' component={RewardForm} />
                <ProtectedRoute exact path='/settings' component={PunchCardSettings} />
                <Route component={NoMatch} />
              </Switch>
            </Container>
          </FetchUser>
        </div>
        <Footer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
