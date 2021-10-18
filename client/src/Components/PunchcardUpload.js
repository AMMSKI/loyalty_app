import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Image } from 'semantic-ui-react';
import { FilePond, registerPlugin} from "react-filepond"
import "filepond/dist/filepond.min.css"
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import AuthProvider, { AuthContext } from '../providers/AuthProvider';
import "filepond/dist/filepond.min.css"
import axios from 'axios';
import Avatar from 'react-avatar';
import { useHistory } from 'react-router';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

export default function PunchcardImageUpload(props) {
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

  // const getPunchcardId = async(restId) => {
  //   try {
  //   let res = await axios.get(`/api/users/${user.id}/restaurants/${restId}/punchcards`)
  //   setPunchcardId(res.data[0].id)
  //   console.log("punchcard info:", res.data)
  //   } catch (error) {
  
  //   }
  // }

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
    } catch (error) {
      console.log(error)
    }
  }

  const fileChanged = (fileItems) => {
    setFiles(fileItems)
    // setUser(user=> ({...user, image: fileItems[0].file}))

  }

  return (
    <div>
      <div style={styles.imageContainer}>
         {logo && 
         <Image style={{
            border:"solid 1px lightgray", 
            borderRadius:"15px"}} 
            src={logo}/> 
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
        <Button primary type="submit" style={{backgroundColor:"#D7272F"}}>Add</Button>
      </Form>
    </div>
    )
  }

  const styles = {
    imageContainer: {
      padding:"20px 0 25px 0", 
      display:"block", 
      marginLeft:"auto", 
      marginRight:"auto", 
      width:"80%", 
      textAlign:"center"
    }
  }