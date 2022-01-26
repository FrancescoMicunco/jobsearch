import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'



const Joblist = ({jobs})=>{
     
     return (
          <>
     
     <Table striped bordered hover>
  <thead>
    <tr>
     <th>Title</th>
      <th>Company</th>
      <th>Detail</th>
    </tr>
  </thead>
          {jobs.map((j, i)=>
     <tbody>
     <tr key={i}>
     
     <td>{j.title}</td>
     <td>{j.company_name}</td>
     <Link to="/detail">
     <td>detail</td>
     </Link>
   </tr>
          </tbody>
          
          )}
</Table>
          </>
     )
     }

     export default Joblist