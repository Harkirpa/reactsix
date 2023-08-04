import React ,{useContext}from 'react'
import StoreData from '../app/Store'
import { Link,useNavigate } from 'react-router-dom'

function Student() {
    const ContextData=useContext(StoreData)
    const Navi=useNavigate()
    console.log(ContextData);
  
return (
  <div>
   
    <h1 className='home'>Student Details</h1>
    <button className='btn' onClick={()=>Navi('/addnewstudent')}>Add New Student</button>
   
    <table>
      <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
      </tr>
      {ContextData.stuName.map((item,index)=>
          {
              return(
                  <tr key={index} >
                      <td>{item.Name}</td>
                      <td>{item.Age}</td>
                      <td>{item.Course}</td>
                      <td>{item.Batch}</td>
                      <td><Link className='link' state={{data:index}} to='/editstudent'>Edit</Link></td>
                  </tr>
              )
          }
          )
      }
    </table>
   
  </div>
)
}
export default Student;
