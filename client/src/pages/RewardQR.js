import React from 'react'
import { Container } from 'react-bootstrap'
import QRCode from "react-qr-code"



const RewardQR = (props) => {
  console.log('qr props',props)
  const reward_id = props.match.params.reward_id
  const userpunchcard_id = props.match.params.userpunchcard_id
  const url = `localhost:3000/rewardAdmin/${reward_id}/${userpunchcard_id}`

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

export default RewardQR