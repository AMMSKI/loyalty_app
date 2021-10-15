import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, } from 'semantic-ui-react';
import { FilePond, registerPlugin} from "react-filepond"
import "filepond/dist/filepond.min.css"
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { AuthContext } from '../providers/AuthProvider';
import "filepond/dist/filepond.min.css"
import axios from 'axios';
import Avatar from 'react-avatar';
import { useHistory } from 'react-router';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

export default function ProfileUpload(props) {
  const [files, setFiles]= useState([])
  const { user , setUser } = useContext(AuthContext)

  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let data = new FormData()
      data.append('file', files[0].file)
      let res = await axios.patch(`/api/users/${user.id}/editimage`, data)
      setUser({...user, image: res.data.image})
      history.push('/profile')
    } catch (error) {
      console.log(error)
    }
  }

  const fileChanged = (fileItems) => {
    setFiles(fileItems)
  }

  return (
    <div>
      <div style={{padding:"8px", display:"block", marginLeft:"auto", marginRight:"auto", width:"50%", textAlign:"center"}}>
         {user && <Avatar size="100"  style={{border:"solid 1px lightgray"}} round src={user.image}/> 
        }
      </div>
      <Form onSubmit={handleSubmit}>
      <FilePond
        name='file'
        files={files}
        allowReorder={true}
        allowMultiple={false}
        onupdatefiles={fileChanged}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
        <Button primary type="submit"> Add </Button>
      </Form>
    </div>
    )
  }