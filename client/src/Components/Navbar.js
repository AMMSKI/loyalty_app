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
          <Link style={{ textDecoration: "none" }} to="/login">
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
          <Menu.Item as='a'>
            <Link style={{ textDecoration: "none" }} to='/rewards'>
              Reward
            </Link>
          </Menu.Item>
          <Menu.Item as='a'>
            <Link style={{ textDecoration: "none" }} to='/rewardform'>
              Reward Form
            </Link>
          </Menu.Item>
        </>
      );
    } else if (user && user.account_type === 'Customer' && authenticated) {
      return (
        <>
          <Menu.Item as='a'>
            <Link style={{ textDecoration: "none" }} to='/landing'>
              Landing
            </Link>
          </Menu.Item>
          <Menu.Item as='a'>
            <Link style={{ textDecoration: "none" }} to='/eran'>
              Earn
            </Link>
          </Menu.Item>
        </>
      );
    }
  }

  return (
    <Sticky>
      <Menu stackable inverted color='blue'>
        <Menu.Item as='a' header>
          <Image size='mini' src='/logo192.png' style={{ marginRight: '1.5em' }} />
          LoyaltyApp
        </Menu.Item>
          <Link style={{ textDecoration: "none" }} to='/'>
        <Menu.Item as='a'>
            Home
        </Menu.Item>
          </Link>
          <Link style={{ textDecoration: "none" }} to='/dashboard'>
        <Menu.Item as='a'>
            Dashboard
        </Menu.Item>
          </Link>
          <Link style={{ textDecoration: "none" }} to='/search'>
        <Menu.Item as='a'>
            Search
        </Menu.Item>
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