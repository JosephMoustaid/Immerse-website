import React, { useState } from "react";
// import CourseCard2 from "../components/CourseCard2.jsx";
import CourseCard from "../components/CourseCard.jsx"

const coursesData = [
  {
    id: 1,
    name: "Calculus: Differentiation & Integration Basics",
    teacher: "John Doe",
    teacherProfile: "https://example.com/teacher1-profile.jpg",
    type: "Maths",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: false,
    rating: {
      percentage: 4.5,
      number: 200,
    },
  },
  {
    id: 2,
    name: "Introduction to Bioinformatics",
    teacher: "Jane Smith",
    teacherProfile: "https://example.com/teacher2-profile.jpg",
    type: "Bio Science",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: true,
    rating: {
      percentage: 4.8,
      number: 350,
    },
  },
  {
    id: 3,
    name: "Rocket Science 101: Basics of Orbital Mechanics",
    teacher: "Dr. Alan Rocket",
    teacherProfile: "https://example.com/teacher3-profile.jpg",
    type: "Rocket Science",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: false,
    rating: {
      percentage: 4.7,
      number: 180,
    },
  },
  {
    id: 4,
    name: "Architectural Science: Sustainable Building Design",
    teacher: "Laura Miller",
    teacherProfile: "https://example.com/teacher4-profile.jpg",
    type: "Architectural Science",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: true,
    rating: {
      percentage: 4.6,
      number: 240,
    },
  },
  {
    id: 5,
    name: "Introduction to Circuit Design",
    teacher: "Richard Electra",
    teacherProfile: "https://example.com/teacher5-profile.jpg",
    type: "Electronics",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: false,
    rating: {
      percentage: 4.9,
      number: 320,
    },
  },
  {
    id: 6,
    name: "Fundamentals of Computer Architecture",
    teacher: "Marcy Watson",
    teacherProfile: "https://example.com/teacher6-profile.jpg",
    type: "Computer Architecture",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: true,
    rating: {
      percentage: 4.3,
      number: 280,
    },
  },
  {
    id: 7,
    name: "Physics: Mechanics & Motion",
    teacher: "Dr. Maxwell Field",
    teacherProfile: "https://example.com/teacher7-profile.jpg",
    type: "Physics",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: false,
    rating: {
      percentage: 4.7,
      number: 210,
    },
  },
  {
    id: 8,
    name: "Hardware Engineering: Building Computer Systems",
    teacher: "Dr. Angela Hardware",
    teacherProfile: "https://example.com/teacher8-profile.jpg",
    type: "Hardware Science",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: true,
    rating: {
      percentage: 4.5,
      number: 190,
    },
  },
  {
    id: 9,
    name: "Mechanical Science: Thermodynamics Basics",
    teacher: "Steve Gears",
    teacherProfile: "https://example.com/teacher9-profile.jpg",
    type: "Mechanical Science",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: false,
    rating: {
      percentage: 4.8,
      number: 300,
    },
  },
];

const categories = [
  "Featured",
  "Maths",
  "Bio Science",
  "Rocket Science",
  "Architectural Science",
  "Electronics",
  "Computer Architecture",
  "Physics",
  "Hardware Science",
  "Mechanical Science",
];

const CourseList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses = coursesData.filter(
    (course) => course.type === selectedCategory || selectedCategory === "Featured"
  );

  return (
    <div className="course-list-container">
      <h2 className="reveal">Explore Inspiring Online Courses</h2>
      <div className="categories reveal">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${category === selectedCategory ? "active" : ""}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="courses">
        {filteredCourses.map((course) => (
          <div className="reveal" key={course.id}>
            <CourseCard
              id={course.id}
              name={course.name}
              teacher={course.teacher}
              teacherProfile={course.teacherProfile}
              type={course.type}
              previewImg={course.previewImg}
              bookmark={course.bookmark}
              rating={course.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
