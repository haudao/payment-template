import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const TitleWrapper = styled.div`
  display: flex;
  padding: 17px 25px 24px;
  background-color: #262626;
  color: #ffffff;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 25px;
  line-height: 32px;
  font-weight: 700;
  letter-spacing: -0.3px;
`;

const CloseIcon = styled(Image)`
  margin-top: 10px;
`;

const Header = () => (
  <TitleWrapper>
    <Title>Choose the form of payment</Title>
    <CloseIcon alt="close-btn" src="/cancel.svg" width={15} height={15} />
  </TitleWrapper>
);

export default Header;
