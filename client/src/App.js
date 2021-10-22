import NavBar from './Components/Navbar';
import { Route, Switch } from 'react-router';
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
import ManualPunchCard from './pages/ManualPunchCard';
import FinishSignUp from './pages/FinishSignUp';
import './StyleSheets/App.css'
import Settings from './pages/Settings';

function App() {
  return (
    <div id="container-page">
      <div id="navbar">
        <NavBar />
      </div>
      <div id="content-wrap">
        <div id="content-main">
          <FetchUser>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/about' component={About} />
              <ProtectedRoute exact path='/home' component={Home} />
              <ProtectedRoute exact path='/search' component={Search} />
              <ProtectedRoute exact path='/dashboard' component={Dashboard} />
              <ProtectedRoute exact path='/rewards' component={Rewards} />
              <ProtectedRoute exact path='/rewardform' component={RewardForm} />
              <ProtectedRoute exact path='/profile' component={Profile} />
              <ProtectedRoute exact path='/edit_user' component={EditUser} />
              <ProtectedRoute exact path='/finish_signup' component={FinishSignUp} />
              <ProtectedRoute exact path='/employeeview' component={EmployeeView} />
              <ProtectedRoute exact path='/earn/:userpunchcard_id' component={Earn} />
              <ProtectedRoute exact path='/addQR/:user_id/:punchcard_id' component={AddQR} />
              <ProtectedRoute exact path='/punchcardAdmin/:user_id/:userpunchcard_id' component={PunchCardAdmin} />
              <ProtectedRoute exact path='/rewardQR/:reward_id/:userpunchcard_id' component={RewardQR} />
              <ProtectedRoute exact path='/rewardAdmin/:reward_id/:userpunchcard_id' component={RewardAdmin} />
              <ProtectedRoute exact path='/manual_punchcard' component={ManualPunchCard} />
              <ProtectedRoute exact path='/scan_result' component={ScanResult} />
              <ProtectedRoute exact path='/charting' component={Charting} />
              <ProtectedRoute exact path='/admin' component={Admin} />
              <ProtectedRoute exact path='/profileupload/:user_id' component={ProfileUpload} />
              <ProtectedRoute exact path='/pcimageupload' component={PunchcardImageUpload} />
              <ProtectedRoute exact path='/settings' component={Settings} />
              <Route component={NoMatch} />
            </Switch>
          </FetchUser>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
