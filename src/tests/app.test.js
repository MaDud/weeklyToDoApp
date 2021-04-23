import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import App from '../App';

configure({adapter: new Adapter()});

test('render component', () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find("[data-test='app_header']");
    expect(header.length).toBe(1);
    const main = wrapper.find("[data-test='app_main']");
    expect(main.length).toBe(1)
})


