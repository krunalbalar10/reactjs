import React, { useState } from 'react'
import useCourseStore from '../app/courseStore';


const CourseForm = () => {
const addCourse = useCourseStore((state) => state.addCourse);

const [courseTitle , setCoureTitle] = useState("");
console.log("Courseform Rendererd");

const handleCourseSubmit = () => {
    if(!courseTitle)
        return alert("Please add a course title");
    addCourse({
        id: Math.ceil(Math.random() * 1000000),
        title: courseTitle,
        completed: false
    })
    setCoureTitle("");
}
  return (
    <div className='form-container'>
        <input className='form-input'
        value={courseTitle}
        onChange={(e) => setCoureTitle(e.target.value)} />
        <button 
        onClick={() => {
            handleCourseSubmit()
        }}
        className='form-submit-btn'>Add Course</button>
      
    </div>
  )
}

export default CourseForm;
