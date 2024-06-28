import axios from 'axios';
import create from 'zustand';

import {devtools , persist} from 'zustand/middleware';

const courseStore = (set) => ({
    courses: [],
    loading: false,
    error: null,

    fetchCourses: async() => {
        set({loading: true, error: null});
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            set({courses: response.data , loading: false});
        }catch(error){
            set({loading: false , error: error.message});
        }
    },

    addCourse: (course) => {
        set((state) => ({
            courses: [course , ...state.courses],
        }))
    },

    removeCourse: (courseId) => {
        set((state) => ({
            courses: state.courses.filter((c) => c.id !== courseId)
        }))
    },

    toggleCourseStatus: (courseId) => {
        set((state) => ({
            courses: state.courses.map((course) => course.id === courseId ? {...course, completed: !course.completed} : course)
        }))
    }
});

const useCourseStore = create(
    devtools(
        persist(courseStore, {
            name: "courses",
        })
    )
)

export default useCourseStore;