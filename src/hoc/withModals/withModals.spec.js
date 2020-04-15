import React, { useContext } from 'react';
import { Button, Modal } from 'antd';
import { shallow, mount } from 'enzyme';
import withModals, { ModalContext } from './withModals';

describe('withModals', () => {
  it('should render correctly', () => {
    const WrapperComponent = () => <div>WrapperComponent</div>;

    const WithModals = withModals(WrapperComponent);
    const wrapper = shallow(<WithModals />);
    expect(wrapper.find(WrapperComponent).length).toEqual(1);
  });

  it('should add modal', () => {
    const ModalContainer = () => {
      const context = useContext(ModalContext);

      return (
        <div>
          WrapperComponent
          <Button onClick={() => context.openModal(Modal)}>Open Modal</Button>
        </div>
      );
    };

    const WithModals = withModals(ModalContainer);
    const wrapper = mount(<WithModals />);

    wrapper
      .find('Button')
      .at(0)
      .simulate('click');

    expect(wrapper.find('Modal').exists()).toEqual(true);
  });
});
