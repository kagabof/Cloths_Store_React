import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall } from "./apiStatusAction"

export function createCourse(course) {
    return { type: types.CREATE_COURSE, course };
}

export function loadCourseSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(courses) {
    return { type: types.UPDATE_COURSE_SUCCESS, courses };
}

export function createCourseSuccess(courses) {
    return { type: types.CREATE_COURSE_SUCCESS, courses };
}

export function loadCourses() {
    return function (dispatch) {
        dispatch(beginApiCall())
        return courseApi
            .getCourses()
            .then(courses => {
                dispatch(loadCourseSuccess(courses));
            })
            .catch(error => {
                throw error;
            });
    };
}

export function saveCourse(course) {
    return function (dispatch, getState) {
        dispatch(beginApiCall())
        return courseApi
            .saveCourse(course)
            .then(saveCourses => {
                course.id
                    ? dispatch(updateCourseSuccess(saveCourses))
                    : dispatch(createCourseSuccess(saveCourses))
            })
            .catch(error => {
                throw error;
            });
    };
}