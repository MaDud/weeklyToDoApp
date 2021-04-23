import React from 'react';
import {shallow} from 'enzyme';
import Backdrop from '../../components/UI/backdrop';

test('render Backdrop component', () => {
    const wrapper = shallow(<Backdrop show={true} />);
    const backdrop = wrapper.exists('[data-test="backdrop"]');
    expect(backdrop).toBe(true)
})

test('return null as show is false', () => {
    const wrapper = shallow(<Backdrop show={false} />);
    const backdrop = wrapper.isEmptyRender();
    expect(backdrop).toBe(true)
})