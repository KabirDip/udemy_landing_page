import logo from './logo.svg';
import React from 'react';
import UdemyLogo from './Assets/UdemyLogo.png';
import './App.css';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import CardCourse from './Components/Card.js';
import cardP from "./Python-Symbol.png";

function App() {
  return (
    
    <form>
      <div className='d-flex gap-1 border w-75 justify-content-around w-100'>
        <img className='mr-4' src={UdemyLogo} alt="" />
        <button class="btn btn-light p-0">categories</button>
        <input className='rounded border border-dark' style={{width: '450px'}} type="text" value="   Search for anything" />
        <button className="btn btn-light">Udemy Business</button>
        <button className="btn btn-light">Tech in Udemy</button>
        <button className="btn btn-light border border-dark" >Log in</button>
        <button className='btn btn-dark'>Sign up</button>
      </div>

      <div className='d-flex flex-column align-items-center'>
      <div className=' mt-4 w-100' style={{marginLeft:"63px"}}>
        <h2>A broad selection of courses</h2>
        <p className='display-5' style={{fontSize:"25px", fontWeight:"400"}}>Choose from over 210,000 online video courses with new additions published every month</p>
      </div>
      <div className='w-100 ' style={{marginLeft:"63px"}}>
        <button className='btn btn-light border' style={{fontSize:"40"}}>Excel</button>
        <button className='btn btn-light border'>Web Development</button>
        <button className='btn btn-light border'>Python</button>
        <button className='btn btn-light border'>JavaScript</button>
        <button className='btn btn-light border'>Data Science</button>
        <button className='btn btn-light border'>Amazon AWS</button>
        <button className='btn btn-light border'>Drawing</button>
      </div>

      
      <div className='border' style={{width: "95%"}}>
      <div className=''>
        <h3 style={{fontSize: "10px"}}>Expand your career opportunities with Python</h3>
        <p>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to</p>
        <button className='btn btn-light border'>Explore Python</button>
        <div>
    <img src="./" alt="" />
        </div>
      </div>
      
      <div className='d-flex justify-content-between'>
        <CardCourse
          img={cardP}
          description="The Complete Python Bootcamp"
          instructorName="Self"
          rating="1"
          subscribers="1"
          amount="199"
        /> 
        <CardCourse
          img={cardP}
          description="The Complete Python Bootcamp"
          instructorName="Self"
          rating="1"
          subscribers="1"
          amount="199"
        /> 
        <CardCourse
          img={cardP}
          description="The Complete Python Bootcamp"
          instructorName="Self"
          rating="1"
          subscribers="20"
          amount="199"
        /> 
        <CardCourse
          img={cardP}
          description="The Complete Python Bootcamp"
          instructorName="Self"
          rating="1"
          subscriber="1"
          amount="199"
        /> 
        <CardCourse
          img={cardP}
          description="The Complete Python Bootcamp"
          instructorName="Self"
          rating="1"
          subscribers="1"
          amount="199"
        /> 
        
      </div>
      </div>
      </div>
  
    </form>
  );
}

export default App;
