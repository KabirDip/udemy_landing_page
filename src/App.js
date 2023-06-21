import logo from './logo.svg';
import React from 'react';
import UdemyLogo from './Assets/UdemyLogo.png';
import './App.css';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import CardCourse from './Components/Card.js';
import LearnersCard from './Components/LearnersCard.js';
import cardP from "./Python-Symbol.png";
import invertedPic from "./Assets/inverted.png"
import Category from './Components/Category.js';
import ImageGrid from './Components/Trusted_by_img.js';
import Customer_review from './Components/More_Customer_Stories.js'
import uBussiness from './Assets/uBussiness.png'
import FooterCard from './Components/FooterCard.js'
import FooterImg from './Assets/UdemyFooter.png'

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
      <div className=' mt-4' style={{marginRight:"200px"}}>
        <h2>A broad selection of courses</h2>
        <p className='display-5' style={{fontSize:"25px", fontWeight:"400"}}>Choose from over 210,000 online video courses with new additions published every month</p>
      </div>
      <div className='' style={{marginRight:"495px"}}>
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
          subscriber="1"
          amount="199"
        /> 
      </div>
      </div>
      </div>


      <div className='lCard'>
      <div className='d-flex justify-content-between lcCardIn' style={{width: "95%"}}>
        <LearnersCard
          review="I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered."
          initials="WA"
          name="Will A"
        />
        <LearnersCard
          review="I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered."
          initials="WA"
          name="Will A"
        />
        <LearnersCard
          img={invertedPic}
          review="I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered."
          initials="WA"
          name="Will A"
        />
        
      </div>
      </div>


      <div className='category-container'>
            <p className='top-category-heading'>Top Category</p>  
        
            <div className='top-categories'>
            
                <Category category_img='https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg' category_name='Design' />
                <Category category_img='https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg' category_name='Development' />
                <Category category_img='https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg' category_name='Marketing' />
                <Category category_img='https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg' category_name='IT & Software' />
                <Category category_img='https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg' category_name='Personal Development' />
                <Category category_img='https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg' category_name='Business' />
                <Category category_img='https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg' category_name='Photography' />
                <Category category_img='https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg' category_name='Music' />
               
            </div>
        </div>



        <div className='trusted_by_section'>
            <div className='trusted_by_section_container'>
            <p className='trusted_by_heading'>Trusted by over 13,400 great teams</p>
            <p className='trusted_by_paragraph'>Leading companies use the same courses to help employees keep their skills fresh.</p>
            </div>
            <ImageGrid/>
        </div>


        <div className='more-customer-stories'>
            <Customer_review
              namelogo_img={"https://s.udemycdn.com/home/ub-case-studies/James_Hemgen.jpeg"}
            />
        </div>


        <div className='upSkillContainerContainer'>

        <div className='upSkillContainer'>
          <div className='upSkillContainerLeft'>
              <img style={{height:"40px", width:"200px", marginLeft:"-5px"}} src={uBussiness} alt="" />
              <h2 style={{marginLeft:"-3px"}}>Upskill your team with Udemy Business</h2>
              <ul style={{marginLeft:"-13px"}}>
                <li>Unlimited access to 22,000+ top Udemy courses, anytime, anywhere</li>
                <li>International course collection in 14 languages</li>
                <li>Top certifications in tech and business</li>
              </ul>
              <div>
                <button className='btn1'>Get Udemy Bussiness</button>
                <button className='btn2'>Learn more</button>
              </div>
          </div>
          <div className='upSkillContainerRight'>
              <img style={{height:"392px"}} src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_1200x1200.jpg" alt="" />
          </div>
        </div>

        </div>



        <div className='beInstructorContainerContainer'>
            <div className='beInstructorContainer'>
              <div className='beInstructorLeft'>
                  <img className='beInstructorIMG' src="https://s.udemycdn.com/home/non-student-cta/instructor-2x-v3.jpg" alt="" />
              </div>
              <div className='beInstructorRight'>
                  <h3 className='beInstructorH'>Become an instructor</h3>
                  <p className='beInstructorP'>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                  <button className='beInstructorB'>Start teaching today</button>
              </div>
            </div>
        </div>



        <div className='footer'>
            <div className='footerTopContainer'>
                  <div className='footerCards'>
                      <FooterCard 
                        a='Udemy Business'
                        b='Teach us on Udemy'
                        c='Get the app'
                        d='About'
                        e='Contact us'
                      />

                      <FooterCard 
                        a='UCareers'
                        b='Blog'
                        c='Help and Support'
                        d='Affiliate'
                        e='Investors'
                      />

                      <FooterCard 
                        a='Terms'
                        b='Privacy policy'
                        c='cookies settings'
                        d='Sitemap'
                        e='Accessibility statement'
                      />
                  </div>

                  <div className='footerBtnContainer'>
                      <button className='footerBtn'>
                        <img src="" alt="" />
                        English
                      </button>
                  </div>
            </div>

            <div className='footerBottom'>
              <img className='footerBottomImg' src={FooterImg} alt="" />
              <p className='footerBottomTxt'>© 2023 Udemy, Inc.</p>
            </div>
        </div>




        
  
    </form>
  );
}

export default App;
