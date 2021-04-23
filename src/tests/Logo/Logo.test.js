import React from 'react';
import {shallow} from 'enzyme';
import Logo from '../../components/Logo/Logo';

test('render Logo component', () => {
    const wrapper = shallow(<Logo />);
    const logo = wrapper.exists("[data-test='logo']");
    expect(logo).toBe(true)
})