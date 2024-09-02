import React from 'react';
import categorie1 from '../assets/categorie1.jpg';
import { FaUsers, FaStar  } from 'react-icons/fa';
import { GrUpdate } from "react-icons/gr";
import CourseCard from '../components/CourseCard';
import person from '../assets/person1.jpg';

const SingleCourse = () => {
  const categorie = "artificial intelligence";
  const courses = [
      { title: "Artificial Intelligence Course", isNew: true, categorie: "artificial intelligence", rating: 4.5, students: 15, teacher: "Oussama Teacher" },
      { title: "Artificial Intelligence Course", isNew: true, categorie: "artificial intelligence", rating: 4.5, students: 15, teacher: "Oussama Teacher" },
      { title: "Artificial Intelligence Course", isNew: true, categorie: "artificial intelligence", rating: 4.5, students: 15, teacher: "Oussama Teacher" },
      { title: "Web Development Course", isNew: false, categorie: "web-development", rating: 4.5, students: 15, teacher: "Oussama Teacher" },
      { title: "Data Science Course", isNew: true, categorie: "Data science", rating: 4.5, students: 15, teacher: "Oussama Teacher" },
      { title: "CyberSecurity Course", isNew: false, categorie: "cybersecurity", rating: 4.5, students: 15, teacher: "Oussama Teacher" },
      { title: "Biology Course", isNew: true, categorie: "biology", rating: 4.5, students: 15, teacher: "Oussama Teacher" },
      { title: "Chemistry Course", isNew: false, categorie: "chemistry", rating: 4.5, students: 15, teacher: "Oussama Teacher" },
      { title: "Geology Course", isNew: true, categorie: "geology", rating: 4.5, students: 15, teacher: "Oussama Teacher" },
      { title: "Artificial Intelligence Advanced Course", isNew: false, categorie: "artificial intelligence", rating: 4.5, students: 15, teacher: "Oussama Teacher" },
      { title: "Physics Course", isNew: true, categorie: "physics", rating: 4.5, students: 15, teacher: "Oussama Teacher" },
      { title: "AI & Machine Learning Course", isNew: false, categorie: "artificial-intelligence", rating: 4.5, students: 15, teacher: "Oussama Teacher" },
      // Add more course objects as needed
  ];

  // Filter courses based on the selected category
  const filteredCourses = categorie === "all" 
      ? courses 
      : courses.filter(course => course.categorie.toLowerCase() === categorie.toLowerCase());

  const limitedCourses = filteredCourses.slice(0, 3);

  return (
    <div className="container-fluid p-0 m-0 mt-3 pt-2 ">
      <div className="container-fluid bg-primary">
      <div className="container">
      <div className="row bg-primary mt-5 p-5">
        <div className="col-4 ">
          <img src={categorie1} alt="imagee" className="img-fluid" />
        </div>
        <div className="col-8 m-auto text-start text-white">
          <h1 className="text-white bg-primary mb-3">Artificial Intelligence Course</h1>
          <p className='mb-3'><FaUsers /> 15 students enrolled</p>
          <div className="text-warning mb-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />          
            <span className="text-white"> (12 Reviews)</span>
           </div>
            <p>Created By <a className=' text-info  mb-3'>Oussama Teacher</a></p>
            <p><GrUpdate/> Last updated on 5/2024</p>

        </div>
        </div>
      </div>
      </div>
      <div className='container mt-5'>
      <div className="row">
        <div className="col-lg-7 ">
          <section className="mb-4">
            <h4>About the course</h4>
            <hr className="border-dark" />
            <p>
              Unlock the full potential of web development with our comprehensive course bundle.
              From foundational HTML and CSS to advanced JavaScript frameworks and responsive design,
              this all-inclusive package is designed to equip you with the skills needed to build stunning,
              professional websites. Perfect for beginners and seasoned developers alike, our expertly
              crafted courses ensure you stay ahead in the ever-evolving world of web development.
              Start your journey today!
            </p>
          </section>

          {/* Skills You'll Gain */}
          <section className="mb-4">
            <h4>Skills you'll gain</h4>
            <hr className="border-dark" />
            <ul className="list-inline">
              <li className="list-inline-item badge bg-secondary text-white me-2">HTML</li>
              <li className="list-inline-item badge bg-secondary text-white me-2">CSS</li>
              <li className="list-inline-item badge bg-secondary text-white">JavaScript</li>
            </ul>
          </section>
          {/* Related Courses */}
      
         
        </div>

        {/* Sidebar */}
        <div className="col-lg-4 m-auto">
          <div className="card bg-light border-dark p-4">
            <h5 className="text-uppercase">Instructor</h5>
            <div className="d-flex align-items-center mb-3">
              <img src={person} className="rounded-circle" width="50" height="50" alt="Instructor" />
              <div className="ms-3">
                <h6 className="fw-normal">Oussama Teacher</h6>
                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                </div>
              </div>
            </div>
            <h6 className="text-uppercase mt-3">Skill-Level</h6>
            <hr className="border-dark" />
            <p>Beginner</p>
            <h6 className="text-uppercase mt-3">Prerequisites</h6>
            <hr className="border-dark" />
            <p>None</p>
            <button className="btn btn-primary fw-bold fs-5 w-100" style={{ backgroundColor: '#FF00FF', borderColor: '#FF00FF' }}>Enroll Now</button>
          </div>
        </div>
      </div>
      <div className="container m-auto mt-5">
        <h4>Related Courses</h4>
        <hr className="border-dark" />
        <div className="row ">
                {limitedCourses.length > 0 ? (
                    limitedCourses.map((course, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <CourseCard course={course} />
                        </div>
                    ))
                ) : (
                    <div className="col-12 mt-5 pt-5">
                        <p className="text-center">No courses available for this category.</p>
                    </div>
                )}
            </div>
      </div>
       {/* Learners Reviews */}
       <section className="mb-4 mt-5">
            <h4>Learners Reviews</h4>
            <hr className="border-dark" />
            <div className="d-flex align-items-center mb-3">
              <img src={person} className="rounded-circle me-3" width="50" height="50" alt="Student" />
              <div>
                <h6 className="mb-0">Oussama Student</h6>
                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                </div>
              </div>
            </div>
            <p className="mb-0">
              In fact, I was totally ignorant about AI. I could learn all the basics of AI. I have gained enough knowledge about the primary principles of AI. Many thanks to our Instructor for enlightening me.
            </p>
          </section>
      </div>

      
    </div>
  );
};

export default SingleCourse;
