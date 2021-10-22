import React from 'react'
import { Container } from 'react-bootstrap'
import QRCode from "react-qr-code"
import '../StyleSheets/QR.css'



const AddQR = (props) => {
  const user_id = props.match.params.user_id
  const punchcard_id = props.match.params.punchcard_id
  const url = `https://loyalburger.herokuapp.com/punchcardAdmin/${user_id}/${punchcard_id}`

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
        <br/>
        <h1>Code:</h1>
        <h1>{user_id}-{punchcard_id}</h1>
      </div>
    </div>
  )

}

export default AddQR