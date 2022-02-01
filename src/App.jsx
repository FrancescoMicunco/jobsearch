import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobList from './pages/Joblist'
import Detail from './pages/Details';
import { Container, Row, Col, Form } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import {useSelector, useDispatch} from 'react-redux'
import { getJobsAction } from '../src/redux/actions'




function App() {

   
const [search, setSearch]= useState("")
const dispatch = useDispatch()

    

// useEffect(()=>{
// dispatch(getJobsAction())
// },[])



    return (
        <BrowserRouter>
            <Container fluid className="text-center">
                <h1>JobSearch App</h1>
                <hr />
                <Row style={{ display: "flex" }}>
                    <Col sm={12} className='text-center' style={{ marginRight: "3rem", marginTop: "3rem" }}>
                        <Form>
                            <Form.Control
                                className="mb-2 mr-sm-2"
                                id="search"
                                value=""
                                placeholder="search"
                                onChange={(e)=>setSearch(e.target.value)}
                                
                            />
                        </Form>
                    </Col>
                    
                </Row>
                <Routes>
                    <Route exact path='/' element={<JobList />} />
                    <Route exact path='/:company' element={<Detail />} />
                </Routes>
            </Container>
        </BrowserRouter>

    );
}

export default (App);