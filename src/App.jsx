import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import JobList from './pages/Joblist'
import Detail from './pages/Details';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'
import { useState, useEffect, useCallback } from 'react'
import { useDebounce } from 'use-debounce'

function App() {
    const [jobs, setJobs] = useState([])
    const [search, setSearch] = useState("")

    const debounceSearch = useDebounce(search, 500);

    const getJobs = async () => {
        
        try {
            const res = await fetch(`https://strive-jobs-api.herokuapp.com/jobs`)
            if (res.ok) {
                const data = await res.json()
                console.log(data)
                setJobs(data.data)
            } else {
                console.log("something goes wrong with data")
            }
        } catch (error) {
            console.log("server error")
        }
    }

useEffect(()=>{
getJobs()
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
                        <Form onChange={(e) => setSearch(e.target.value)}>
                            <Form.Control
                                className="mb-2 mr-sm-2"
                                id="search"
                                placeholder="search"
                            />
                        </Form>
                    </Col>
                    <Col sm={12} className='text-center'>
                        <JobList jobs={jobs} search={search} />
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