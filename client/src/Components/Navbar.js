import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Button, Icon, Image, Menu, Sticky, Grid } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import { useHistory, useLocation } from 'react-router'
import '../StyleSheets/App.css'
import '../StyleSheets/Navbar.css'

const NavBar = () => {
  const history = useHistory()
  const location = useLocation()
  const { authenticated, user, handleLogout, handleDelete } = useContext(AuthContext)

  const handleClick = (e, target) => {
    history.push(`${target}`)
  }

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
        <Menu.Item>
          <Button
            inverted
            basic
            onClick={(e) => history.push('/login')}
          >
            GET STARTED
          </Button>
        </Menu.Item>

      </>
    );
  };

  const customNavItems = () => {
    if (user && user.account_type === 'business' && authenticated) {
      return (
        <>
          <Menu.Item as='a' onClick={(e) => handleClick(e, '/rewards')}>
            Reward
          </Menu.Item>
          <Menu.Item as='a' onClick={(e) => handleClick(e, '/rewardform')}>
            Reward Form
          </Menu.Item>
        </>
      );
    } else if (user && user.account_type === 'customer' && authenticated) {
      return (
        <>
          <Menu.Item as='a' onClick={(e) => handleClick(e, '/dashboard')}>
            Dashboard
          </Menu.Item>
          <Menu.Item as='a' onClick={(e) => handleClick(e, '/earn')}>
            Earn
          </Menu.Item>
          <Menu.Item as='a' onClick={(e) => handleClick(e, '/search')}>
            Search
          </Menu.Item>
        </>
      );
    }
  }

  return (
    <Sticky>
      <Grid class="row no-gutter">
        <Grid.Row className='GridRow'>
          <Menu size='small' tabular inverted color='blue'>
            <Menu.Item as='a' header>
              <Image avatar src='/logo192.png' style={{ marginRight: '0.8em' }} />
              LoyaltyApp
            </Menu.Item>
            {/* <Menu.Item style={{ height: "50px" }} fitted="horizontally" as='a'>
              <Link className='LinkNavbar' to='/profile'>
                Profile
              </Link>
            </Menu.Item>
            <Menu.Item style={{ height: "50px" }} fitted="horizontally" as='a'>
              <Link className='LinkNavbar' to='/dashboard'>
                Dashboard
              </Link>
            </Menu.Item>
            <Menu.Item style={{ height: "50px" }} fitted="horizontally" as='a'>
              <Link className='LinkNavbar' to='/search'>
                Search
            </Menu.Item>
              </Link> */}
            <Menu.Menu position="right">
              {rightNavItems()}
            </Menu.Menu>
          </Menu>
        </Grid.Row>
        <Grid.Row className='GridRow'>
          <Menu size='small' tabular inverted color='blue'>
            {customNavItems()}
          </Menu>
        </Grid.Row>
      </Grid>
    </Sticky>
  )
}

export default NavBar