import React from 'react';
import { Link } from 'react-router-dom';
import CourseItem from '../components/CourseItem';
import { CourseList } from '../helpers/CourseList';

import '../styles/Course.css';

function Courseworks() {
    return (
        <div className="Courseworks">
            <h1> My Courseworks</h1>
            <div className="CourseList">
                {CourseList.map((course, idx) => (
                    <Link key={idx} to={course.url}>
                        <CourseItem id={idx} name={course.name} image={course.image} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Courseworks;