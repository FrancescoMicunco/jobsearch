import React from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getJobsAction } from '../redux/actions'
import {useSelector, useDispatch} from 'react-redux'

const Joblist = () => {
     const dispatch = useDispatch()
     const jobs = useSelector(state=>state.jobs.data)
     console.log("this is the job", jobs)
         
     useEffect(()=>{
     dispatch(getJobsAction())
     },[])
     
      

     const navigate = useNavigate()
     // const [selectedCompany, setSelectedCompany] = useState(null)


     

     return (
          <>
<h1>Job List</h1>
               <Table striped bordered hover>
                    <thead>
                         <tr>
                              <th>Title</th>
                              <th>Company</th>
                              <th>Detail</th>
                         </tr>
                    </thead>
                    {jobs.map((j, i) =>
                         <tbody>
                              <tr key={i}>
                                   <td>{j.title}</td>
                                   <td>{j.company_name}</td>
                                   <td onClick={() => navigate(`/${j.company_name}`)} style={{ cursor: 'pointer' }}>detail</td>
                              </tr>
                         </tbody>
                    )}
               </Table>
          </>
     )
}

export default Joblist