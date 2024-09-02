import React from 'react';
import { FaUsers, FaStar } from 'react-icons/fa';
import categorie1 from '../assets/categorie1.jpg';
import person from '../assets/person1.jpg';
import { Link } from 'react-router-dom';


const CourseCard = ({ course }) => {
  return (
    <div className="course-card2">
      <div className="card-image-wrapper">
        <img src={categorie1} alt={course.title} className="course-image" />
        {course.isNew && <span className="new-badge bg-primary">New</span>}
      </div>
      <div className="course-info p-3">
        <div className="course-rating mb-2 d-flex align-items-center">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="star" />
          ))}
          <span className="course-reviews ms-2">(45 Reviews)</span>
        </div>
        <h3 className="course-title mb-2">{course.title}</h3>
        <p className="course-enrolled mb-2 text-muted d-flex align-items-center">
          <FaUsers className="me-2" /> 156 students enrolled
        </p>
        <div className="course-teacher d-flex align-items-center">
          <img src={person} alt={course.teacherName} className="teacher-image me-2" />
          <span>Oussama Teacher</span>
        </div>
        <Link to="/course" className="btn w-100 mt-3 btn-primary d-block text-center text-decoration-none fw-bolder text-white">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
