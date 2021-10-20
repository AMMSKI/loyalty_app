import React from "react";
import { Card } from "semantic-ui-react";

const About = () => {
  
  const description = [
    "Fall 2021 Graduate. Looking forward to the new adventure of being a web developer!",
    "Love to code, play golf and hang out with my family.",
    "Excited to keep learning and growing web development and plans to be a front end developer.",
    "hkjfds",
    "hkjfds"
  ]


  return(
    <div>

      <h1>About the Coders!</h1>

      <Card>
        <Card.Content header='Elise' />
        <Card.Content description={description[0]} />
        <Image src="https://files.slack.com/files-pri/T04QL6Z16-F02JC4YB42E/image_from_i" />
        <Card.Content extra>
        </Card.Content>
      </Card>,

      <Card>
      <Card.Content header='Alan' />
      <Card.Content description={description[1]} />
      <Image src= "https://files.slack.com/files-pri/T04QL6Z16-F02K5SXF124/image.png"/>
      <Card.Content extra>
      </Card.Content>
      </Card>,

      <Card>
      <Card.Content header='Kelsey' />
      <Card.Content description={description[2]} />
      <Image src=  "Kelsey_Headshot-2e.jpg"/>
      <Card.Content extra>
      </Card.Content>
      </Card>,

      <Card>
      <Card.Content header='Rafael' />
      <Card.Content description={description[3]} />
      <Image src= "https://files.slack.com/files-pri/T04QL6Z16-F02JJ40G2JG/74bde692-6a87-4a74-8d52-d8217035b7c3_1_105_c.jpeg" />
      <Card.Content extra>
      </Card.Content>
      </Card>,

      <Card>
      <Card.Content header='Lee' />
      <Card.Content description={description[4]} />
      <Image src= "https://files.slack.com/files-pri/T04QL6Z16-F02JCRD3DFF/me.png" />
      <Card.Content extra>
      </Card.Content>
      </Card>
    </div>
  )

    }




export default About;