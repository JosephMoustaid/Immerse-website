import React from 'react';
import CourseCard2 from './CourseCard2';

const CourseList2 = (props) => {
    const { categorie } = props;

    const courses = [
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

    return (
        <div className="col-md-8 mx-auto">
            <h2 className="mb-4">Categorie : {categorie === "all" ? "All Courses" : categorie.charAt(0).toUpperCase() + categorie.slice(1)}</h2>
            <hr className="border border-primary border-3 w-25"/>
            <div className="row">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <CourseCard2 course={course} />
                        </div>
                    ))
                ) : (
                    <div className="col-12 mt-5 pt-5">
                        <p className="text-center">No courses available for this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CourseList2;
