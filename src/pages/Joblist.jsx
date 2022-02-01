import React from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getJobsAction } from '../redux/actions'
import {useSelector, useDispatch} from 'react-redux'
import {FaRegHeart } from 'react-icons/fa'


const Joblist = () => {
     const dispatch = useDispatch()
     const jobs = useSelector(state=>state.jobs.data)
     console.log("this is the job", jobs)
         
     useEffect(()=>{
     dispatch(getJobsAction())
     },[])
     
      

     const navigate = useNavigate()
         

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
                    {jobs?.map((j, i) =>
                         <tbody key={i}>
                              <tr >
                                   <td onClick={() => navigate(`/${j.company_name}`)} style={{ cursor: 'pointer' }}>{j.title}</td>
                                   <td onClick={() => navigate(`/${j.company_name}`)} style={{ cursor: 'pointer' }}>{j.company_name}</td>
                                   <td FaHeart  ><FaRegHeart/></td>
                              </tr>
                         </tbody>
                    )}
               </Table>
          </>
     )
}

export default Joblist