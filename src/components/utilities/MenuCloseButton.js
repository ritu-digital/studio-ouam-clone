import React from 'react';
import styled from 'styled-components';

const MenuCloseButton = () => {
  return (
    <>
      <CloseIcon></CloseIcon>
    </>
  );
};

export default MenuCloseButton;

const CloseIcon = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  z-index: 10;
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: '';
    height: 33px;
    width: 2px;
    background-color: #fff;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
