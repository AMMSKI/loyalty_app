import React from 'react'
import QRCode from "react-qr-code"
import { Container } from 'semantic-ui-react'



const ShowQR = () => {

  return (
    <Container style={{padding:'30px'}}>
      <QRCode value='https://www.youtube.com/watch?v=dQw4w9WgXcQ' />
    </Container>
  )

}

export default ShowQR