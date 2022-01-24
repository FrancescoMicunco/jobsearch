import React from 'react'
import { Link } from 'react-router-dom'



const Joblist = ({jobs})=>{
     console.log("this is jobs in JobList array", jobs.data)
     return (
          <>
     
     <div>


     {jobs.data.slice(0,10).map((j, i)=>
     <tbody>
     <tr key={i}>
     
     <td>{j.title}</td>
     <td>{j.company_name}</td>
     <Link >
     <td>detail</td></Link>
   </tr>
          </tbody>
          
          )}
          </div>
          </>
     )
     }

     export default Joblist