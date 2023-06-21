import React from 'react'
import '../App.css';


function cardCourse(props){
    return(
        <div className='cardCourseS'>
            <img className='cardPic' src={props.img} alt="" />
            <p><b>{props.description}</b></p>
            <p className='instructorName'>{props.instructorName}</p>
            <div className='courseReview'>
                <p style={{color: "orange"}}>{props.rating}</p>
                <p>({props.subscribers})</p>
            </div>
            <p><b>{props.amount}</b></p>
        </div>
    )
}



export default cardCourse
