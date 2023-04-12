import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const TitleWrapper = styled.div`
  display: flex;
  padding: 34px 50px 47px;
  background-color: #262626;
  color: #ffffff;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 50px;
  line-height: 68px;
  font-weight: 700;
  letter-spacing: -0.3px;
`;

const CloseIcon = styled(Image)`
  margin-top: 20px;
`;

const Header = () => (
  <TitleWrapper>
    <Title>Choose the form of payment</Title>
    <CloseIcon alt="close-btn" src="/cancel.svg" width={27} height={27} />
  </TitleWrapper>
);

export default Header;
