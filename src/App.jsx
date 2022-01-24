import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobList from './pages/Joblist'
import Detail from './pages/Details';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import {useState} from 'react'

function App() {
const [jobs, setJobs]= useState([])


const getJobs = async () =>{

}




    return (
        <BrowserRouter>
        
      <Container fluid className="text-center">
          <h1>JobSearch App</h1>
          <hr />
        <Row style={{display:"flex"}}>
          <Col sm={12}  className='text-center' style={{marginRight:"3rem", marginTop:"3rem"}}>
          <Form inline>
 
  <Form.Control
    className="mb-2 mr-sm-2"
    id="search"
    placeholder="search"
    onSubmit={()=>getJobs()}
  />
  
  <Button type="submit" className="mb-2">
    Submit
  </Button>
</Form>
          </Col>
          <Col sm={12} className='text-center'>
            <JobList />
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