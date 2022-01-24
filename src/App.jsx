import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobList from './pages/home'
import Detail from './pages/detail';


function App() {
    return ( 
    <BrowserRouter>
        <h1 > JobSearch </h1>
        <hr />  
        <Routes>
        <Route path = "/" component={<JobList />} /> 
        <Route path="/:detail" component={<Detail />} />
        </Routes>
    </BrowserRouter >

    );
}

export default App;