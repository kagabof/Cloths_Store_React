import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadCourses, saveCourse } from '../../redux/actions/courseAction';
import { loadAuthors } from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import CourseForm from './CourseForm';
import { newCourse } from '../../../tools/mockData';
import { getCourses } from '../../api/courseApi';

const ManageCoursesPage = ({
    courses,
    authors,
    loadAuthors,
    loadCourses,
    saveCourse,
    history,
    ...props }) => {
    const [course, setCourse] = useState({ ...props.course });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        if (courses.length === 0) {
            loadCourses().catch(error => {
                alert("Loading courses failed" + error);
            });
        } else {
            setCourse({ ...props.course })
        }

        if (authors.length === 0) {
            loadAuthors().catch(error => {
                alert("Loading authors failed" + error);
            });
        }

    }, [props.course]);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCourse(prevCourse => ({
            ...prevCourse,
            [name]: name === "authorId" ? parseInt(value, 10) : value
        }));
    }

    const handleSave = (event) => {
        event.preventDefault();
        saveCourse(course).then(() => {
            history.push("/courses");
        });
    }

    return (
        <CourseForm course={course}
            errors={errors}
            authors={authors}
            onChange={handleChange}
            onSave={handleSave}
        />
    );
}
ManageCoursesPage.propTypes = {
    course: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
    authors: PropTypes.object.isRequired,
    loadAuthors: PropTypes.func.isRequired,
    loadCourses: PropTypes.func.isRequired,
    saveCourse: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}
const getCourseBySlug = (courses, slug) => {
    return courses.find(course => course.slug === slug) || null;
}

const mapStateToProps = (state, ownProps) => {
    const slug = ownProps.match.params.slug;
    const course =
        slug && state.courses.length > 0
            ? getCourseBySlug(state.courses, slug)
            : newCourse;
    return {
        course,
        courses: state.courses,
        authors: state.authors
    };
}

const mapDispatchToProps = {
    loadCourses,
    loadAuthors,
    saveCourse
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManageCoursesPage);