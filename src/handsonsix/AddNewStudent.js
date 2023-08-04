import React, { useContext } from 'react'
import StoreData from '../app/Store'
import { useNavigate } from 'react-router-dom'
const AddNewStudent = () => {
    const ContextData=useContext(StoreData)
    console.log(ContextData);
    const Nav=useNavigate();
    const newStu={
        Name:'',
        Age:'',
        Course:'',
        Batch:''
    }
    const handleChange=(e)=>{
        newStu[e.target.name]=e.target.value;
    }
    const handleClick=()=>{
        ContextData.stuName.push(newStu)
        Nav('/student')
    }
        return (
            <form className='form'>
            <div className='lform'>
                <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='Name' name='Name' onChange={handleChange} />
                  <input type='text' id='age' placeholder='Age' name='Age' onChange={handleChange} />
                  <input type='text' id='course' placeholder='Course' name='Course' onChange={handleChange} />
                  <input type='text' id='batch' placeholder='Batch' name='Batch'onChange={handleChange} /> 
            </div>
            <button className='btn2' type='button' onClick={handleClick}>Add New Student</button>
            <button className='btn3' type='button' onClick={()=>Nav('/student')}>Cancel</button>
        </form>
          )
        }


export default AddNewStudent