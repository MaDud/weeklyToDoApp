import React from 'react';
import {shallow} from 'enzyme';
import Modal from '../../components/UI/Modal';

test('render modal as visible', () => {
    const wrapper = shallow(<Modal show={true} />);
    const modal = wrapper.exists('.modal--invisible');
    expect(modal).toBeFalsy()
})

test('render modal as invisible', () => {
    const wrapper = shallow(<Modal show={false} />);
    const modal = wrapper.exists('.modal--invisible');
    expect(modal).toBeTruthy()
})