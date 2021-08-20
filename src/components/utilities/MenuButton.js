import React from 'react';
import styled from 'styled-components';

const MenuButton = () => {
  return (
    <>
      <LineIcon></LineIcon>
      <LineMiddleIcon></LineMiddleIcon>
      <LineIcon></LineIcon>
    </>
  );
};

export default MenuButton;

const LineIcon = styled.div`
  width: 26px;
  height: 2px;
  background-color: #fff;
  transform: translate(-50%, 50%);
`;
const LineMiddleIcon = styled.div`
  width: 41px;
  height: 2px;
  margin: 6px 0;
  transform: translate(-50%, 50%);
  background-color: #fff;
`;
