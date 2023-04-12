import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-top: 1px solid #d3dee9;
  padding: 30px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PreviousBtn = styled.button`
  border: none;
  background: none;
  color: #262626;
  font-size: 30px;
  font-weight: 500;
  line-height: 40px;
`;

const NextBtn = styled.button`
  border: none;
  border-radius: 12px;
  background-color: #1e21ff;
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
  line-height: 40px;
  padding: 30px;
  height: 100px;
  width: 240px;
`;

const Footer = () => (
  <Wrapper>
    <PreviousBtn>Previous</PreviousBtn>
    <NextBtn>Next</NextBtn>
  </Wrapper>
);

export default Footer;
