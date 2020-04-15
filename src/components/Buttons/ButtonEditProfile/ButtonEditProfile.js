import React, { useContext } from 'react';
import { Button } from 'antd';
import { ModalContext } from '../../../hoc/withModals';
import ModalStoreProfile from '../../ModalStoreProfile';
import './styles.scss';

const ButtonEditProfile = (props) => {
  const context = useContext(ModalContext);
  const onClick = () => context.openModal((modalProps) => <ModalStoreProfile {...modalProps} />);

  return (
    <Button className="btn-edit-profile" onClick={onClick} {...props}>
      Edit profile
    </Button>
  );
};

export default ButtonEditProfile;
