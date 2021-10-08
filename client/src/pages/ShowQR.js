import React from 'react'
import { Container } from 'react-bootstrap'
import QRCode from "react-qr-code"



const ShowQR = () => {

  return (
    <Container style={{padding:'30px'}} >
      <QRCode value='https://www.youtube.com/watch?v=dQw4w9WgXcQ' />
    </Container>
  )

}

export default ShowQR