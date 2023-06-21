import React from "react";

function Customer_review(props) {
    return (
      <div className="more-customer-review-card-container">
      <div className='more-customer-review-card'>
      
      <div className='more-customer-review-card-part_left'>
          <p style={{fontSize:"50px", fontWeight:"500"}}>"</p>
          <p className='more-customer-review-description'> Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.</p>
          <button className="btnmakanaka"><ins>Read full story</ins></button>
      </div>

      <div className="more-customer-review-card-part_right-container">
      <div className='more-customer-review-card-part_right'>
          <img className='customerImg' src={props.namelogo_img} alt="name-logo"></img>
          <p style={{marginBottom: "0", fontSize:"20px", fontWeight:"700", marginTop:"30px"}}>Makanaka</p>
          <p style={{marginBottom: "30px", color:"gray"}}>Copy Writer</p>
          <p>Booz Allen Hamilton</p>
      </div>
      </div>
      
    </div>
    </div>
    );
  }
  
  export default Customer_review;