import React from 'react'
import { Container } from 'react-bootstrap'
import QRCode from "react-qr-code"
import '../StyleSheets/QR.css'




const RewardQR = (props) => {
  const reward_id = props.match.params.reward_id
  const userpunchcard_id = props.match.params.userpunchcard_id
  const url = `https://loyalburger.herokuapp.com/rewardAdmin/${reward_id}/${userpunchcard_id}`

  const copy = async (url) => {
    await navigator.clipboard.writeText(url)
    alert('Copied To Clipboard')
  }

  return (
    <div className='QR-container'>
      <div className='QR-code'>
      <QRCode value={url} />
      </div>
      <div className='QR-body'>
        <br/>
        <h1>Code:</h1>
        <h1>{reward_id}-{userpunchcard_id}</h1>
      </div>
    </div>
  )
}

export default RewardQR