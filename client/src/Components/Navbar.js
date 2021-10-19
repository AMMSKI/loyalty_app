import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Button, Icon, Image, Menu, Sticky, Grid } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import { useHistory, useLocation } from 'react-router'
import '../StyleSheets/Navbar.css'
import logo from "../burgerlogo.png"

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
        <div >
          <Dropdown style={{ color: "white" }} item text={user.name}>
            <Dropdown.Menu>

              <Menu.Item onClick={() => location.pathname === '/profile'} >
                <Link style={{ textDecoration: "none", color: "black" }} to='/profile'>
                  <Icon name='user' />Profile
                </Link>
              </Menu.Item>
              <Menu.Item onClick={() => location.pathname === '/edit_user'} >
                <Link style={{ textDecoration: "none", color: "black" }} to='/edit_user'>
                  <Icon name='edit' />
                  Edit Profile
                </Link>
              </Menu.Item>
              <Menu.Item onClick={() => handleDelete(history)}>
                <Icon name='trash' />
                Delete Profile
              </Menu.Item>
              <Dropdown.Divider />
              <Menu.Item onClick={() => handleLogout(history)}>
                <Icon name='log out' />
                Logout
              </Menu.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      );
    }
    return (
      <div style={{ color: "white" }}>
        <Menu.Item>
          <Button
            basic
            onClick={(e) => history.push('/login')}
            inverted
          >
            LOGIN
          </Button>
        </Menu.Item>

      </div>
    );
  };

  const customNavItems = () => {
    if (user && user.account_type === 'Business' && authenticated) {
      return (
        <div className="nav-items">
          <Menu.Item
            as='a'
            onClick={(e) => handleClick(e, '/admin')}
            style={{ textDecoration: "underline #D7272F", color: "white" }}>
            Admin
          </Menu.Item>

          <Menu.Item as='a' onClick={(e) => handleClick(e, '/employeeview')}>
            Employee View
          </Menu.Item>

          <Menu.Item
            as='a'
            onClick={(e) => handleClick(e, '/settings')}
            style={{ textDecoration: "underline #D7272F", color: "white" }}>
            Settings
          </Menu.Item>
          <Menu.Item
            as='a'
            onClick={(e) => handleClick(e, '/charting')}
            style={{ textDecoration: "underline #D7272F", color: "white" }}>

            Charts
          </Menu.Item>
        </div>
      );
    } else if (user && user.account_type === 'Customer' && authenticated) {
      return (
        <div className="nav-items">
          <Menu.Item
            as='a'
            onClick={(e) => handleClick(e, '/dashboard')}
            // inverted
            color="white"
            style={{ textDecoration: "underline #D7272F", color: "white" }}
          >
            {/* <div color="white"> */}
            Dashboard
            {/* </div> */}
          </Menu.Item>

          <Menu.Item
            as='a'
            onClick={(e) => handleClick(e, '/search')}
            style={{ textDecoration: "underline #D7272F", color: "white" }}
          >
            Search
          </Menu.Item>
        </div>
      );
    }
  }

  return (

    <Sticky>
      <div>
        <Grid class="row no-gutter">
          <Grid.Row className='GridRow'>
            <Menu fluid size='small' inverted tabular style={{ backgroundColor: "black" }}>
              <Menu.Item as='a' header onClick={(e) => handleClick(e, '/')}>
                <Image avatar src={logo} style={{ marginRight: '0.8em' }} />
              </Menu.Item>
              <Menu.Menu position="right">
                {rightNavItems()}
              </Menu.Menu>
            </Menu>
          </Grid.Row>
          <Grid.Row className='GridRow'>
            <Menu size='small' inverted tabular style={{ backgroundColor: "black" }}>
              {customNavItems()}
            </Menu>
          </Grid.Row>
        </Grid>
      </div>
    </Sticky>

  )
}

export default NavBar

