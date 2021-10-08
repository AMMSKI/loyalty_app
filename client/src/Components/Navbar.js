import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Icon, Image, Menu, Sticky } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import { useHistory, useLocation } from 'react-router'
import '../StyleSheets/App.css'

const NavBar = () => {
  const history = useHistory()
  const { authenticated, user, handleLogout, handleDelete } = useContext(AuthContext)
  const location = useLocation()

  const rightNavItems = () => {
    if (user) {
      return (
        <>
          <Dropdown item simple text={user.name}>
            <Dropdown.Menu>
              <Menu.Item onClick={() => location.pathname === '/edit_user'} >
                <Link style={{ textDecoration: "none", color: "black" }} to='/edit_user'>
                  <Icon name='edit' />
                  Edit Profile
                </Link>
              </Menu.Item>
              <Menu.Item onClick={() => handleDelete(history)}> <Icon name='trash' />Delete Profile</Menu.Item>
              <Dropdown.Divider />
              <Menu.Item onClick={() => handleLogout(history)}> <Icon name='log out' />Logout</Menu.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      );
    }
    return (
      <>
        <Menu.Item as='a'>
          <Link className='LinkNavbar' to="/login">
            Login
          </Link>
        </Menu.Item>
      </>
    );
  };

  const customNavItems = () => {
    if (user && user.account_type === 'Business' && authenticated) {
      return (
        <>
          <Menu.Item fitted="horizontally" as='a'>
            <Link className='LinkNavbar' to='/rewards'>
              Reward
            </Link>
          </Menu.Item>
          <Menu.Item fitted="horizontally" as='a'>
            <Link className='LinkNavbar' to='/rewardform'>
              Reward Form
            </Link>
          </Menu.Item>
        </>
      );
    } else if (user && user.account_type === 'Customer' && authenticated) {
      return (
        <>
          <Menu.Item fitted="horizontally" as='a'>
            <Link className='LinkNavbar' to='/landing'>
              Landing
            </Link>
          </Menu.Item>
          <Menu.Item fitted="horizontally" as='a'>
            <Link className='LinkNavbar' to='/eran'>
              Earn
            </Link>
          </Menu.Item>
        </>
      );
    }
  }

  return (
    <Sticky>
      <Menu style={{ height: "50px" }} stackable inverted color='blue'>
        <Menu.Item as='a' header>
          <Image size='mini' src='/logo192.png' style={{ marginRight: '1.5em' }} />
          LoyaltyApp
        </Menu.Item>
        <Menu.Item fitted="horizontally" as='a'>
          <Link className='LinkNavbar' to='/'>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item fitted="horizontally" as='a'>
          <Link className='LinkNavbar' to='/dashboard'>
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item fitted="horizontally" as='a'>
          <Link className='LinkNavbar' to='/search'>
            Search
          </Link>
        </Menu.Item>
        </Link>
        <Menu.Menu>
          {customNavItems()}
        </Menu.Menu>
        <Menu.Menu position="right">
          {rightNavItems()}
        </Menu.Menu>
      </Menu>
    </Sticky>
  )
}

export default NavBar