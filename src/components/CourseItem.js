import React from "react";
import { useNavigate } from "react-router-dom";

function CourseItem({ image, name, id}) {
    const navigate = useNavigate();
    return (
    <div
        className="CourseItem"
        onClick={() => {
            navigate("/Course/" + id);
        }}
        >
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h1> {name} </h1>
    </div>  
    );  
}
export default CourseItem;