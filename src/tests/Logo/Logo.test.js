import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from  'enzyme-adapter-react-17-updated';
import Logo from '../../components/Logo/Logo';

configure({adapter: new Adapter()});

test('render Logo component', () => {
    const wrapper = shallow(<Logo />);
    const logo = wrapper.exists("[data-test='logo']");
    expect(logo).toBe(true)
})