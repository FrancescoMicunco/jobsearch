import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobList from './pages/Joblist'
import Detail from './pages/Details';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'
import {useState, useEffect} from 'react'


function App() {
const [jobs, setJobs]= useState([])


const getJobs = async () =>{

    try {
       const res = await fetch('https://strive-jobs-api.herokuapp.com/jobs')
   if(res.ok){
   console.log(res)
   const data = await res.json()
   setJobs(data)
}else{
   console.log("something goes wrong with data")
}
} catch (error) {
   console.log("server error")
}
}    


useEffect(()=>{  
    
getJobs()        
}, [])

   return (
        <BrowserRouter>
        
      <Container fluid className="text-center">
          <h1>JobSearch App</h1>
          <hr />
        <Row style={{display:"flex"}}>
          <Col sm={12}  className='text-center' style={{marginRight:"3rem", marginTop:"3rem"}}>
          <Form onChange={(e)=>console.log(e.target.value)}>
 
  <Form.Control
    className="mb-2 mr-sm-2"
    id="search"
    placeholder="search"
    
  />
  
  <Button type="submit" className="mb-2">
    Submit
  </Button>
</Form>
          </Col>
          <Col sm={12} className='text-center'>
          <Table striped bordered hover>
  <thead>
    <tr>
      
      <th>Title</th>
      <th>Company</th>
      <th>Detail</th>
    </tr>
  </thead>
  
    <JobList jobs={jobs}/>

</Table>
            
          </Col>
        </Row>
 
        <Routes>
          <Route path='/' component={<JobList />} />
          <Route path='/:detail' component={<Detail />} />
        </Routes>
      </Container>
    </BrowserRouter>

    );
}

export default App;