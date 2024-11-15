// Card.js
import React from 'react';
import maleProfile from '../assets/male-profile.png';
import femaleProfile from '../assets/female-profile.png';
import { Link } from 'react-router-dom';
import { deleteContactAPI } from '../services/allAPI';

const Card = ({displayData,setDeleteContact}) => {
  const handleDelete = async (id)=>{
    try{
      const result = await deleteContactAPI(id)
      setDeleteContact(result)
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='text-center bg-info text-white rounded p-4 shadow' style={{ width: '100%', height: '400px' }}>
      <img src={displayData?.gender==="male"?maleProfile:femaleProfile} width={'200px'} alt="profile" className='mb-3' />
      <p>Name: {displayData?.name}</p>
      <p>Phone: {displayData?.phone}</p>
      <div>
        <Link to={'/edit'} state={{ contactData: displayData }}><button className='btn btn-outline-warning mx-1' title='Edit'><i className="fa-solid fa-pen-to-square"></i></button></Link>
        <button onClick={()=>handleDelete(displayData?.id)} className='btn btn-outline-danger mx-1' title='Delete'><i className="fa-solid fa-trash"></i></button>
      </div>
    </div>
  );
};

export default Card;
