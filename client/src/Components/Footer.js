import logo from "../burgerlogo.png"
import React from 'react'
import {
  Container,
  List,
  Menu,
  Segment,
  Sticky,
} from 'semantic-ui-react'

const Footer = () => {
  return (

    <div style={styles.Footer}>
      <Segment vertical style={{ margin: '0em 0em 0em', paddingTop: '2em' }}>
        <Container textAlign='center'>
          <List style={styles.List} horizontal inverted divided link size='small'>
            &copy; Copyright 2021, Loyalty Corporation
            |&nbsp;
            <List.Item as='a' href='mailto:rbrionesdev@outlook.com'>
              Contact Us
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>


  );
};

const styles = {
  Footer: {
    backgroundColor: "black",
    position: "fixed",
    bottom: 0,
    clear: "both",
    width: "100%",
    height: "70px",
    textAlign: "center",
  },
  List: {
    marginTop: "3px",
    color: "white"
  }
};

export default Footer;