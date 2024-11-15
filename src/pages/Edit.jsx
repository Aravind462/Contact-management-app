import React, { useEffect, useState } from 'react'
import maleProfile from '../assets/male-profile.png'
import femaleProfile from '../assets/female-profile.png'
import './Add.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { updateContactAPI } from '../services/allAPI'


const Edit = () => {
    const [contactDetails,setContactDetails] = useState({
        gender:"",name:"",phone:""
    })
    const navigate = useNavigate()

    const location = useLocation()
    const {contactData} = location.state || {}

    useEffect(()=>{
        if(contactData){
            setContactDetails(contactData)
        }
    },[contactData])
    console.log(contactDetails);

    const handleEdit = async ()=>{
        const {gender,name,phone} = contactDetails
        if(gender && name && phone){
          try{
            const result = await updateContactAPI(contactDetails)
            console.log(result);
            if(result.status>=200 && result.status<300){
              alert("Contact updated successfully!!!")
              navigate('/') 
            }
          }catch(err){
            console.log(err);
          }
        }else{
          alert("Enter all inputs!!!")
        }
    }
    
  return (
    <>
        <h1 className='text-center my-3' style={{fontSize:'60px',fontWeight:'1000'}}>Edit Contact</h1>
        <div className='container text-center bg-info p-5 rounded shadow' style={{maxWidth:'500px'}}>
          <div className='profile-pic d-flex justify-content-center align-items-center'>
            <div className='mx-2'>
              <input checked={contactDetails.gender==="male"} onChange={(e)=>setContactDetails({...contactDetails,gender:e.target.value})} value="male" type="radio" id='male' name='profile' hidden/>
              <label htmlFor="male">
                <img width={'200px'} src={maleProfile} alt="" draggable={false}/>
              </label>
            </div>
            <div className='mx-2'>
              <input checked={contactDetails.gender==="female"} onChange={(e)=>setContactDetails({...contactDetails,gender:e.target.value})} value="female" type="radio" id='female' name='profile' hidden/>
              <label htmlFor="female">
                <img width={'200px'} src={femaleProfile} alt="" draggable={false}/>
              </label>
            </div>
          </div>
          <input value={contactDetails.name} onChange={(e)=>setContactDetails({...contactDetails,name:e.target.value})} type="text" placeholder='Name' className='form-control my-3'/>
          <input value={contactDetails.phone} onChange={(e)=>setContactDetails({...contactDetails,phone:e.target.value})} type="text" placeholder='Phone' className='form-control my-3'/>
          <div>
            <button onClick={handleEdit} className='btn btn-outline-success w-25 mx-1' title='Save'><i className="fa-solid fa-floppy-disk"></i></button>
            <Link to={'/'}><button  className='btn btn-outline-danger w-25 mx-1' title='Cancel'><i className="fa-solid fa-ban"></i></button></Link>
          </div>
        </div>
    </>
  )
}

export default Edit