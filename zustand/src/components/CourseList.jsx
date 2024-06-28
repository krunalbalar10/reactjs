import React, { useEffect } from 'react';
import useCourseStore from '../app/courseStore';


function CourseList() {
    const {courses , loading , error , fetchCourses , removeCourses , toggleCourseStatus} = useCourseStore(
        (state) => ({
            courses: state.courses,
            loading: state.loading,
            error: state.error,
            fetchCourses: state.fetchCourses,
            removeCourses: state.removeCourse,
            toggleCourseStatus: state.toggleCourseStatus
        })
    )

    useEffect(() => {
        fetchCourses();
    } , [fetchCourses]);

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error}</div>

  return (
    <>
        <ul>
            {courses.map((course , i) => {
                return (
                    <React.Fragment key={course.id}>
                        <li className={'course-item'} style={{
                            backgroundColor: course.compeleted? "#00FF0044" : "black"
                        }}>
                            <span className='course-item-col-1'><input checked={course.completed} type="checkbox" onChange={(e) => {
                                toggleCourseStatus(course.id)
                            }}/></span>
                            <span>{course.title}</span>
                            <button onClick={() => toggleCourseStatus(course.id)}>
                            {course.completed ? 'Undo' : 'Complete'}
                        </button>
                            <button onClick={() => {
                                removeCourses(course.id)
                            }} className="delete btn" style={{color: "white"}} >Delete</button>
                        </li>
                    </React.Fragment>
                )
            })}
        </ul>
    </>
  )
}

export default CourseList;
