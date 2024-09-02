import React, { useState } from "react";
//import CourseCard2 from "../components/CourseCard2.jsx";
import CourseCard from "../components/CourseCard.jsx"

const coursesData = [
  {
    id: 1,
    name: "Piano Basics: Learn Notes, Scales & Chords",
    teacher: "Elijah Fox-Pack",
    teacherProfile: "https://example.com/teacher1-profile.jpg",
    type: "Music", // Category
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: false,
    rating: {
      percentage: 4.5, // Rating out of 5
      number: 200, // Number of ratings
    },
  },
  {
    id: 2,
    name: "Learn Guitar: The Complete Beginners Guide",
    teacher: "Marc Barnacle",
    teacherProfile: "https://example.com/teacher2-profile.jpg",
    type: "Music",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: true,
    rating: {
      percentage: 4.8,
      number: 350,
    },
  },
  {
    id: 3,
    name: "Mastering Watercolor: Techniques & Tips",
    teacher: "Anna Heaton",
    teacherProfile: "https://example.com/teacher3-profile.jpg",
    type: "Drawing & Painting",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: false,
    rating: {
      percentage: 4.7,
      number: 180,
    },
  },
  {
    id: 4,
    name: "Digital Marketing Fundamentals: SEO & Content Strategy",
    teacher: "Paul Green",
    teacherProfile: "https://example.com/teacher4-profile.jpg",
    type: "Marketing",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: true,
    rating: {
      percentage: 4.6,
      number: 240,
    },
  },
  {
    id: 5,
    name: "Animation for Beginners: Bringing Drawings to Life",
    teacher: "Jasmine Lang",
    teacherProfile: "https://example.com/teacher5-profile.jpg",
    type: "Animation",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: false,
    rating: {
      percentage: 4.9,
      number: 320,
    },
  },
  {
    id: 6,
    name: "Social Media Mastery: Building a Brand",
    teacher: "Renee Thompson",
    teacherProfile: "https://example.com/teacher6-profile.jpg",
    type: "Social Media",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: true,
    rating: {
      percentage: 4.3,
      number: 280,
    },
  },
  {
    id: 7,
    name: "UI/UX Design Essentials: From Wireframe to Prototype",
    teacher: "Nick Patterson",
    teacherProfile: "https://example.com/teacher7-profile.jpg",
    type: "UI/UX design",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: false,
    rating: {
      percentage: 4.7,
      number: 210,
    },
  },
  {
    id: 8,
    name: "Creative Writing: Finding Your Voice",
    teacher: "Molly Stevens",
    teacherProfile: "https://example.com/teacher8-profile.jpg",
    type: "Creative Writing",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: true,
    rating: {
      percentage: 4.5,
      number: 190,
    },
  },
  {
    id: 9,
    name: "Digital Illustration: Character Design",
    teacher: "David Clarkson",
    teacherProfile: "https://example.com/teacher9-profile.jpg",
    type: "Digital Illustration",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: false,
    rating: {
      percentage: 4.8,
      number: 300,
    },
  },
  {
    id: 10,
    name: "Film & Video Production: From Concept to Final Cut",
    teacher: "Lisa Morton",
    teacherProfile: "https://example.com/teacher10-profile.jpg",
    type: "Film & Video",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: true,
    rating: {
      percentage: 4.6,
      number: 150,
    },
  },
  {
    id: 11,
    name: "Crafting Basics: Upcycling and DIY Projects",
    teacher: "Susan Clarke",
    teacherProfile: "https://example.com/teacher11-profile.jpg",
    type: "Crafts",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: false,
    rating: {
      percentage: 4.4,
      number: 130,
    },
  },
  {
    id: 12,
    name: "Freelance & Entrepreneurship: Building Your Brand",
    teacher: "Anthony Moore",
    teacherProfile: "https://example.com/teacher12-profile.jpg",
    type: "Freelance & Entrepreneurship",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: true,
    rating: {
      percentage: 4.9,
      number: 220,
    },
  },
  {
    id: 13,
    name: "Graphic Design: Basics to Advanced Techniques",
    teacher: "Catherine Blake",
    teacherProfile: "https://example.com/teacher13-profile.jpg",
    type: "Graphic Design",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: false,
    rating: {
      percentage: 4.7,
      number: 310,
    },
  },
  {
    id: 14,
    name: "Photography for Beginners: Understanding Your Camera",
    teacher: "George Hamilton",
    teacherProfile: "https://example.com/teacher14-profile.jpg",
    type: "Photography",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: true,
    rating: {
      percentage: 4.5,
      number: 275,
    },
  },
  {
    id: 15,
    name: "Time Management: Boost Your Productivity",
    teacher: "Emma Stone",
    teacherProfile: "https://example.com/teacher15-profile.jpg",
    type: "Productivity",
    previewImg: "https://www.petbehaviourcompany.co.uk/images/default-course-thumbnail.png",
    bookmark: false,
    rating: {
      percentage: 4.2,
      number: 145,
    },
  },
];

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX design",
  "Creative Writing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
];



const CourseList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Music");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses = coursesData.filter(
    (course) => course.type === selectedCategory || selectedCategory === "Featured"
  );

  return (
    <div className="course-list-container">
      <h2>Explore Inspiring Online Courses</h2>
      <div className="categories">
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
          <CourseCard
            key={course.id}
            id={course.id}
            name={course.name}
            teacher={course.teacher}
            teacherProfile={course.teacherProfile}
            type={course.type}
            previewImg={course.previewImg}
            bookmark={course.bookmark}
            rating={course.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;


