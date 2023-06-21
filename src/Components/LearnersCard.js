import React from 'react'
import '../App.css';



function learnersCard(props){
    return(
        <div className='learnersCard'>
            <p className='lccomma'>''</p>
            <p className='learnersReview'>{props.review}</p>
            <div className='nameContainer'>
                <p className='pInitials'>{props.initials}</p>
                <p className='pName'>{props.name}</p>
            </div>
            <hr />
            <a className='lcLink' href="">NEW ULTIMATE AWS Certified Cloud Practioner - 2022</a>
        </div>
    )
}




export default learnersCard