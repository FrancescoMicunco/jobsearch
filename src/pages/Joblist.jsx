import React from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'



const Joblist = () => {

      

     // const navigate = useNavigate()
     // const [selectedCompany, setSelectedCompany] = useState(null)


     // const handleSelect = (index) => {
     //      const selected = jobs.filter(i => i === index)
     //      setSelectedCompany(selected)
          
     //      navigate(`/${selectedCompany}`)

     // }


     return (
          <>
<h1>Job List</h1>
               {/* <Table striped bordered hover>
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

                                   <td onClick={(i) => handleSelect(i)} style={{ cursor: 'pointer' }}>detail</td>

                              </tr>
                         </tbody>

                    )}
               </Table> */}
          </>
     )
}

export default Joblist