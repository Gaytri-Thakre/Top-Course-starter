import React from 'react';
import Card from './Card';

const Cards = (props) => {
    // Define getCourses function to return list of all courses received from api response
    const getCourses = () => {
        let allCourses = [];
        if (props.courses) {
            Object.values(props.courses).forEach((courseCategory) => {
                // Check if courseCategory is an array before iterating
                if (Array.isArray(courseCategory)) {
                    courseCategory.forEach((course) => {
                        allCourses.push(course);
                    });
                } else {
                    console.error("courseCategory is not an array:", courseCategory);
                }
            });
        } else {
            console.error("props.courses is null or undefined");
        }
        return allCourses;
    };
    

    

    // Call getCourses function to get the list of courses
    const courses = getCourses();

    return (
        <div >
            {/* Map over the list of courses and render a Card component for each course */}
            {courses.map((course) => (
                <Card course={course} />
            ))}
        </div>
    );
};

export default Cards;
