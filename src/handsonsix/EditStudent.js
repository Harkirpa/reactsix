import React, { useContext } from 'react'
import StoreData from '../app/Store';
import { useLocation, useNavigate } from 'react-router-dom';
const EditStudent = () => {
    const ContextData=useContext(StoreData);
    const Navi=useNavigate();
    const Indexvalue=useLocation().state.data;
    console.log(ContextData);
    console.log(Indexvalue);

    const updateObj={
        Name:ContextData.stuName[Indexvalue].Name,
        Age:ContextData.stuName[Indexvalue].Age,
        Course:ContextData.stuName[Indexvalue].Course,
        Batch:ContextData.stuName[Indexvalue].Batch,
        
    }
    const handleChange=(event)=>{
        updateObj[event.target.name]=event.target.value;
    }
    const handleClick=()=>{
           ContextData.stuName[Indexvalue]=updateObj;
           Navi('/student')
    }
  return (
    <>
    <form className='form'>
        <div className='lform'>
            <label htmlFor='name'>Name</label>
        <input type='text' id='name' placeholder={ContextData.stuName[Indexvalue].Name} name='Name' onChange={handleChange} />
              <input type='text' id='age' placeholder={ContextData.stuName[Indexvalue].Age} name='Age' onChange={handleChange} />
              <input type='text' id='course' placeholder={ContextData.stuName[Indexvalue].Course} name='Course' onChange={handleChange} />
              <input type='text' id='batch' placeholder={ContextData.stuName[Indexvalue].Batch}  name='Batch'onChange={handleChange} /> 
        </div>
        <button className='btn2' type='button' onClick={handleClick}>Update Student</button>
        <button className='btn3' type='button' onClick={()=>Navi('/student')}>Cancel</button>
    </form>
    </>
  )
}

export default EditStudent
