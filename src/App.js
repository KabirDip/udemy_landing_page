import React from 'react';
import Home from './Pages/Home.js'
import PythonPage from './Pages/PythonPage.js'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";


function link()
{
  return(
    <BrowserRouter>
        <Link to="/"> Home </Link>
        <Link to="/PythonPage">abcdefg</Link>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/PythonPage" element={<PythonPage />} />
        </Routes>
    </BrowserRouter>

  );
}

export default link