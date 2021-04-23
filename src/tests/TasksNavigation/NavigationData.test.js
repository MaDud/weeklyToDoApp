import React from 'react';
import {shallow} from 'enzyme';
import NavigationData from '../../components/TasksNavigation/NavigationData';

test('render NavigationData component without error', () => {
    const wrapper = (props={}) => shallow(<NavigationData {...props} />);
    const navigationData = wrapper().exists('[data-test="weekInfo"]');
    expect(navigationData).toBeTruthy()
})

test('render NavigationData component with week number 10', () => {
    const wrapper = (props={}) => shallow(<NavigationData {...props} weekNumber={10}/>);
    const navigationData = wrapper().find('[data-test="weekInfo__mainTitle"]');
    expect(navigationData.text()).toBe('Week 10')
})

test('render NavigationData component with day Monday', () => {
    const wrapper = (props={}) => shallow(<NavigationData {...props} dayOfWeek='Monday'/>);
    const navigationData = wrapper().find('[data-test="weekInfo__subtitle--day"]');
    expect(navigationData.text()).toBe('Monday')
})

test('render NavigationData component with week period 1-7.01.2021', () => {
    const wrapper = (props={}) => shallow(<NavigationData {...props} weekPeriod='1-7.01.2021'/>);
    const navigationData = wrapper().find('[data-test="weekInfo__subtitle--week"]');
    expect(navigationData.text()).toBe('1-7.01.2021')
})

