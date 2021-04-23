import React from 'react';
import {shallow} from 'enzyme';
import EmptyList from '../../components/TasksList/EmptyList';

test('render EmptyList component', () => {
    const wrapper = shallow(<EmptyList />);
    const emptyList = wrapper.exists("[data-test='emptyList']");
    expect(emptyList).toBe(true)
});

test('render EmptyList title', () => {
    const wrapper = shallow(<EmptyList />);
    const title = wrapper.find("[data-test='emptyList__title']");
    expect(title.length).toBe(1)
});

test('render 2 EmptyList paragraphs', () => {
    const wrapper = shallow(<EmptyList />);
    const paragraphs = wrapper.find("[data-test='emptyList__text']");
    expect(paragraphs.length).toBe(2)
})

test('render icon', () => {
    const wrapper = shallow(<EmptyList />);
    const icon = wrapper.exists("[data-test='emptyList__icon']");
    expect(icon).toBe(true)
})