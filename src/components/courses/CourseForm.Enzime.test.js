import React from "react";
import { shallow } from 'enzyme';
import CourseForm from "./CourseForm";

function renderCourseForm(args) {
    const defaultProps = {
        authors: [],
        course: {},
        saving: false,
        error: {},
        onSave: () => { },
        onChange: () => { }
    };
    const props = { ...defaultProps, ...args };
    return shallow(<CourseForm {...props} />)
}

it('Should renders form and header', () => {
    const wrapper = renderCourseForm({ saving: true });
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h2').text()).toEqual('Add Course');
    expect(wrapper.find('button').text()).toBe('Saving...');
})