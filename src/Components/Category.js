import React from "react";

function category(props) {
    return (
      <div className='category-card'>
      
        <img className='category-img' src={props.category_img} alt="Course" />
        <p className='category-name'>{props.category_name}</p>
        

      </div>
    );
  }
  
  export default category;