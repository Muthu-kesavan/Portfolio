import React from "react";
import { useParams } from "react-router-dom";
import { CourseList } from "../helpers/CourseList";
import "../styles/CourseDisplay.css";

function CourseDisplay() {
    const { id } = useParams();
    const courseIndex = parseInt(id); // Parse the id string to an integer
    const Course = CourseList[courseIndex];
    
    return (
        <div className="course">
            <h1>{Course.name}</h1>
            <img src={Course.image} alt={Course.name} />
            <p>
                <b>Acquired Skills:</b> {Course.skills}
            </p>
        </div>
    );
}

export default CourseDisplay;