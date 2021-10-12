import React, { useState } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';

function ProfileUpload(props) {
  const [fileInput, setFileInput] = useState('')
  const [selectedFile, setSelectedFile] = useState('')
  const [previewSource, setPreviewSource] = useState('')

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    previewFile(file)
  }

  const previewFile = (file) => {
   const reader = new FileReader()
   reader.readAsDataURL(file)
   reader.onloadend = () => {
      setPreviewSource(reader.result)
   }
 }

 const handleSubmitFile = (e) => {
   e.preventDefault()
   if(!previewSource) return
   uploadImage(previewSource)

   const reader = new FileReader()
   reader.readAsDataURL(selectedFile)
 }

 const uploadImage = (base64EncodedImage) => {
   console.log(base64EncodedImage)
   try {
     await fetch('/api/upload', {
     method: 'POST',
     body: JSON.stringify({data: base64EncodedImage}),
     })
   } catch (error) {
     console.log(error)
   }
 }

  return (
    <div className="jumbotron text-center">
      <h1>Upload a profile picture</h1>
      <Form onSubmit={handleSubmitFile} className="form">
        <Input 
          type="file" 
          name="image" 
          onChange={handleFileInputChange} 
          value={fileInput} 
          className="form-input" />
          <Button type="submit">
            Submit
          </Button>
      </Form>
      {previewSource && (
        <img src={previewSource} alt="chosen"
        style={{height:"150px"}} />
        )}
    </div>
  )
}

export default ProfileUpload;

// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import {
//   Button,
//   Segment,
//   Divider,
//   Tab,
//   Message,
//   Form,

// } from "semantic-ui-react";

// import "./styles.css";
// import axios from "axios";

// const ProfileUpload = () => {
//   constructor(props) {
//     super(props);
//     this.state = {
//       file: null
//     };
//   }

//   fileInputRef = React.createRef();

//   onFormSubmit = e => {
//     e.preventDefault(); // Stop form submit
//     this.fileUpload(this.state.file).then(response => {
//       console.log(response.data);
//     });
//   };

//   fileChange = e => {
//     this.setState({ file: e.target.files[0] }, () => {
//       console.log("File chosen --->", this.state.file);
//     });
//   };

//   // Import datasources/schemas Tab 1
//   fileUpload = file => {
//     const url = "/some/path/to/post";
//     const formData = new FormData();
//     formData.append("file", file);
//     const config = {
//       headers: {
//         "Content-type": "multipart/form-data"
//       }
//     };
//     return put(url, formData, config);
//   };

//   // Export Schedules Tab 2
//   fileExport = file => {
//     // handle save for export button function
//   };

//   render() {
//     const { file } = this.state;
//     const panes = [
//       {
//         menuItem: "Import ",
//         render: () => (
//           <Tab.Pane attached={false}>
//             <Message>Some message about offline usage</Message>
//             <Form onSubmit={this.onFormSubmit}>
//               <Form.Field>
//                 <Button
//                   content="Choose File"
//                   labelPosition="left"
//                   icon="file"
//                   onClick={() => this.fileInputRef.current.click()}
//                 />
//                 <input
//                   ref={this.fileInputRef}
//                   type="file"
//                   hidden
//                   onChange={this.fileChange}
//                 />
//               </Form.Field>
//               <Button type="submit">Upload</Button>
//             </Form>
//           </Tab.Pane>
//         )
//       }
//     ];
//     return (
//       <Segment style={{ padding: "5em 1em" }} vertical>
//         <Divider horizontal>OFFLINE USAGE</Divider>
//         <Tab menu={{ pointing: true }} panes={panes} />
//       </Segment>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
