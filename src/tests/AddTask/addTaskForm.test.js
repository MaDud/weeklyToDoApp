import React from 'react';
import {shallow} from 'enzyme';
import AddTaskForm from '../../components/AddTask/AddTaskFrom';

test('render component AddTaskFrom', () => {
    const wrapper = shallow(<AddTaskForm />);
    const addTaskForm = wrapper.find("[data-test='addTaskForm']");
    expect(addTaskForm.length).toBe(1)
})

test('render two labels for input/textarea', () => {
    const wrapper = shallow(<AddTaskForm />);
    const labels = wrapper.find("[data-test='addTaskForm__label']");
    expect(labels.length).toBe(2)
})

test('render one input', () => {
    const wrapper = shallow(<AddTaskForm />);
    const input = wrapper.find("[data-test='addTaskForm__input']");
    expect(input.length).toBe(1)
})

test('render one textarea', () => {
    const wrapper = shallow(<AddTaskForm />);
    const textarea = wrapper.find("[data-test='addTaskForm__textarea']");
    expect(textarea.length).toBe(1)
})