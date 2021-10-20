import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
// import { Card } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Icon, Segment, Dropdown, Input } from 'semantic-ui-react';

const WalletCard = (props) => {
  const { user } = useContext(AuthContext)
  const [showButton, setShowButton] = useState(true)

  const p = props.p
  return (
    <div className='searchCard'>
      <MyCard url={p.logo} >
        <Row className='dropdownRow'>
          <Dropdown pointing='top right' multiple icon='ellipsis vertical'>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => props.deletePunchcard(p.up_id)}>Remove</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Row>
        <MyLink to={`/earn/${p.up_id}`} userpunchcard_id={p.up_id}>
          <Card.Body>
            <Row>
              <Col className='nameCol1'>
                <Row>
                  <Card.Title>
                    <h1 className='name'>
                      {p.restaurant_name}
                    </h1>
                  </Card.Title>
                  <p className='points'>
                    {p.current_points ? p.current_points : '0'} points
                  </p>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </MyLink>
      </MyCard>
    </div>
  )
}

export default WalletCard




const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const MyCard = styled(Card)`
background-image: url(${props => props.url});
  width: 80vw;
  // height: 20vh;
  background-position: center;
  background-size: cover;
  border: 1px solid white;
  font-weight: bolder;
`

const MyDropdown = styled(Dropdown)`
  color: white;
`