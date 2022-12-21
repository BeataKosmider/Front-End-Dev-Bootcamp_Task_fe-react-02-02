import React from 'react';
import Button from './Button';
import Enzyme, { render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const onClick = jest.fn();

const props = {
  label: 'Click me!',
  onBtnClick: onClick,
};

describe('Button tests', () => {
  it('Dodano poprawnie komponent Button', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.find('button').exists()).toBe(true);
  });
  it('Dodano prop potrzebny do przekazania napisu w buttonie (label)', () => {
    const wrapper = render(<Button {...props} />);
    expect(wrapper.text()).toMatch(props.label);
  });
  it('Dodano prop funkcji callback odpalanej na kliku w button (onBtnClick)', () => {
    const wrapper = shallow(<Button {...props} />);
    wrapper.simulate('click');

    expect(onClick).toHaveBeenCalled();
  });
});
