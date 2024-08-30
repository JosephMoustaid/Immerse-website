import React from 'react';
import CourseCategorySection from '../components/CourseCategorySection';


function CourseList(){
    const courses = [
        {
          title: 'Artificial Intelligence Course',
          image: 'src/assets/categorie1.jpg',
          reviews: 128,
          enrolled: 15,
          teacherName: 'Oussama Teacher',
          teacherImage: 'path/to/teacher-image.jpg',
        },
        {
            title: 'Artificial Intelligence Course',
            image: 'path/to/image.jpg',
            reviews: 128,
            enrolled: 15,
            teacherName: 'Oussama Teacher',
            teacherImage: 'path/to/teacher-image.jpg',
          },
          {
            title: 'Artificial Intelligence Course',
            image: 'path/to/image.jpg',
            reviews: 128,
            enrolled: 15,
            teacherName: 'Oussama Teacher',
            teacherImage: 'path/to/teacher-image.jpg',
          }, {
            title: 'Artificial Intelligence Course',
            image: 'path/to/image.jpg',
            reviews: 128,
            enrolled: 15,
            teacherName: 'Oussama Teacher',
            teacherImage: 'path/to/teacher-image.jpg',
          },
          {
            title: 'Artificial Intelligence Course',
            image: 'path/to/image.jpg',
            reviews: 128,
            enrolled: 15,
            teacherName: 'Oussama Teacher',
            teacherImage: 'path/to/teacher-image.jpg',
          },
          
      ];
    return (
        <div className="app container mt-5 pt-5">
          <CourseCategorySection category="Software" courses={courses} />
          <CourseCategorySection category="Artificial Intelligence" courses={courses} />
        </div>
      );
}

export default CourseList;