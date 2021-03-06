import courseData from './config/courseData.json'
import { getRandomCourse } from './utils/randomCourse';
const N_COURSES = 100;
function createCourses() {
    const courses = [];
    for(let i = 0; i < N_COURSES; i++){
        courses.push(getRandomCourse(courseData));
    } 
    return courses
}
//TODO rendering inside <ul> 
const listCourses = document.getElementById("courses");
listCourses.innerHTML = `<ul>${renderListCourses()}</ul>`;
function renderListCourses(){
    return createCourses().map(n => `<li>${JSON.stringify(n)}</li>`);
}
