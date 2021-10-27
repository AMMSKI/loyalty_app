import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react';
import { FilePond, registerPlugin} from "react-filepond"
import "filepond/dist/filepond.min.css"
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { AuthContext } from '../providers/AuthProvider';
import "filepond/dist/filepond.min.css"
import axios from 'axios';
import { useHistory } from 'react-router';
import '../StyleSheets/Profile.css'

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

export default function PunchcardImageUpload({uploadForm, setUploadForm}) {
  const [files, setFiles]= useState([])
  const [punchcardId, setPunchcardId]= useState([])
  const [punchcard, setPunchcard]= useState([])
  const [logo, setLogo]= useState([])
  const { user , setUser } = useContext(AuthContext)

  const history = useHistory()

  useEffect(() => {
    getRestaurantId()
  }, [])

  const getRestaurantId = async() => {
    try {
    let res = await axios.get(`/api/users/${user.id}/restaurants`)
    getPunchcard(res.data[0].id)  
    } catch (error) {
  
    }
  }

  const getPunchcard = async(restId) => {
    try {
    let res = await axios.get(`/api/users/${user.id}/restaurants/${restId}/punchcards`)
    console.log("punchcard:", res.data)
    setPunchcard(res.data[0])
    setLogo(res.data[0].logo)
    setPunchcardId(res.data[0].id)
    } catch (error) {
  
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(user)
    try {
      let logo = new FormData()
      logo.append('file', files[0].file)
      console.log(logo)
      let res = await axios.patch(`/api/users/${user.id}/punchcards/${punchcardId}`, logo)
      setPunchcard({...punchcard, logo: res.data.logo})
      setLogo(res.data.logo)
      setUploadForm(!uploadForm)
    } catch (error) {
      console.log(error)
    }
  }

  const fileChanged = (fileItems) => {
    setFiles(fileItems)

  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
      <FilePond
        name='file'
        files={files}
        allowReorder={true}
        allowMultiple={false}
        onupdatefiles={fileChanged}
        labelIdle='Browse'
        />
        <button 
          primary 
          type="submit" 
          className="WhiteFontC add-punchcard-button AmaranthRedBackG"
          >
            Add
        </button>
      </Form>
    </div>
    )
  }
