import React from 'react'
import { Container } from 'react-bootstrap'
import QRCode from "react-qr-code"



const AddQR = (props) => {
  console.log(props)
  const user_id = props.match.params.user_id
  const punchcard_id = props.match.params.punchcard_id
  const url = `localhost:3000/punchcardAdmin/${user_id}/${punchcard_id}`

  const copy = async (url) => {
    await navigator.clipboard.writeText(url)
    alert('Copied To Clipboard')
  }

  return (
    <Container style={{padding:'30px'}}>
      <QRCode value={url} />
      <div>
        <p>Or go to {url}</p>
        <button onClick={()=>copy(url)} disabled={!url}>Copy To Clipboard</button>
      </div>
    </Container>
  )

}

export default AddQR