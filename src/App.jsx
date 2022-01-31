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

    // const debounceSearch = useDebounce(search, 500);
const [search, setSearch]= useState("")

const dispatch = useDispatch()
// const jobs = useSelector(state=>state.jobs.data)
    

useEffect(()=>{
dispatch(getJobsAction())
},[])



//     useEffet(useCallback(() => {
//         if (debounceSearch) {
//             getJobs(search)
//         } else {
// setSearch("")
//         }

//     }, [debounceSearch]))

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
                    <Col sm={12} className='text-center'>
                        <JobList search={search} />
                    </Col>
                </Row>
                <Routes>
                    <Route path='/' component={<JobList />} />
                    <Route path='/company/:detail' component={<Detail />} />
                </Routes>
            </Container>
        </BrowserRouter>

    );
}

export default (App);