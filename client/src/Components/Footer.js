import logo from "../burgerlogo.png"

import React from 'react'
import {
  Container,
  Image,
  List,
  Segment,
  Sticky,
} from 'semantic-ui-react'

const Footer = () => {
  return (
    <Sticky stackable>
      <div style={styles.Footer}>
        <Segment fluid vertical style={{ margin: '0em 0em 0em', padding: '0.3em 0em' }}>
          <Container textAlign='center'>
            <br />
            <List style={styles.List} horizontal inverted divided link size='small'>
              &copy; Copyright 2021, Loyalty Corporation |&nbsp;
              <List.Item as='a' href='mailto:rbrionesdev@outlook.com'>
                Contact Us
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    </Sticky>


  );
};

const styles = {
  Footer: {
    backgroundColor: "black",
    position: "relative",
    bottom: "0",
    width: "100%",
  },
  List: {
    marginTop: "3px",
    color: "white"
  }
};

export default Footer;