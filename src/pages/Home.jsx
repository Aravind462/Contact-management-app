import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { getAllContactsAPI } from '../services/allAPI';

const Home = () => {
  const [allContacts,setAllContacts] = useState([])
  const [deleteContact,setDeleteContact] = useState("")
  useEffect(()=>{
    getAllContacts()
  },[deleteContact])

  const getAllContacts = async ()=>{
    try{
      const result = await getAllContactsAPI()
      console.log(result);
      if(result.status>=200 && result.status<300){
        setAllContacts(result.data)
      }
    }catch(err){
      console.log(err);
    }
  }
  
  return (
    <>
        <h1 className='text-center my-3' style={{fontSize:'60px',fontWeight:'1000'}}>Contacts</h1>
        <div className='container d-flex justify-content-center'>
            <div style={{ width: '100%' }}>
              <div className='row justify-content-center'>
                {
                  allContacts?.length>0?allContacts?.map(contact=>(
                    <div key={contact.id} className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                      <Card setDeleteContact={setDeleteContact} displayData={contact}/>
                    </div>
                  )):<div className='fw-bolder text-danger fs-1 text-center'>No Contacts!!!</div>
                }
              </div>
            </div>
        </div>
        <Link to={'/add'} style={{position:'fixed',right:'0px',bottom:'0px',zIndex:'1'}} title='New contact'><button className='btn btn-outline-dark m-3'><i className="fa-solid fa-plus"></i></button></Link>
    </>
  )
}

export default Home