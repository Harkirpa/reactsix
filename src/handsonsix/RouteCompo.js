import React,{useState} from 'react'
import Home from './Home'
import Contact from './Contact'
import Student from './Student'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import StoreData from '../app/Store'
import { Link } from 'react-router-dom'
import AddNewStudent from './AddNewStudent'
import EditStudent from './EditStudent'
const RouteCompo = () => {
     const[studentData,setStudent]=useState([
        {Name:"John",Age:23,Course:"MERN",Batch:"EA23"},
        {Name:"Smity",Age:23,Course:"MERN",Batch:"EA23"},
        {Name:"Kohli",Age:23,Course:"MERN",Batch:"EA23"},
        {Name:"Dhoni",Age:23,Course:"MERN",Batch:"EA23"},
        {Name:"Rohit",Age:23,Course:"MERN",Batch:"EA23"},
     ])
  return (
    <div>
    <BrowserRouter>
    <div className='navbar'>
      <Link to='/' className='element'>Home</Link>
       <Link to='/student'className='element'>Students</Link>
       <Link to='/contact'className='element'>Contact Us</Link>
    </div>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/student' element={
            <StoreData.Provider value={{stuName:studentData,updateStu:setStudent}}>
                      <Student/>
            </StoreData.Provider>
       }/>
       <Route path='/addnewstudent' element={
            <StoreData.Provider value={{stuName:studentData,updateStu:setStudent}}>
                      <AddNewStudent/>
            </StoreData.Provider>
       }/>
       <Route path='/editstudent' element={
            <StoreData.Provider value={{stuName:studentData,updateStu:setStudent}}>
                      <EditStudent/>
            </StoreData.Provider>
       }/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default RouteCompo