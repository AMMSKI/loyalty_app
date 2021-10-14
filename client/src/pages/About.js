import React from "react";
import { Card } from "semantic-ui-react";

const About = () => {
  
  const description = [
    "dsfgdfs",
    "dfsj",
    "hdfsjk",
    "hkjfds",
    "hkjfds"
  ]


  return(
    <div>

      <h1>About the Coders!</h1>

      <Card>
        <Card.Content header='Elise' />
        <Card.Content description={description[0]} />
        <Card.Content extra>
        </Card.Content>
      </Card>,

      <Card>
      <Card.Content header='Alan' />
      <Card.Content description={description[1]} />
      <Card.Content extra>
      </Card.Content>
      </Card>,

      <Card>
      <Card.Content header='Kelsey' />
      <Card.Content description={description[2]} />
      <Card.Content extra>
      </Card.Content>
      </Card>,

      <Card>
      <Card.Content header='Rafael' />
      <Card.Content description={description[3]} />
      <Card.Content extra>
      </Card.Content>
      </Card>,

      <Card>
      <Card.Content header='Lee' />
      <Card.Content description={description[4]} />
      <Card.Content extra>
      </Card.Content>
      </Card>
    </div>
  )

    }




export default About;