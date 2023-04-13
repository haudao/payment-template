import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-top: 1px solid #d3dee9;
  padding: 15px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PreviousBtn = styled.button`
  border: none;
  background: none;
  color: #262626;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
`;

const NextBtn = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #1e21ff;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  padding: 15px;
  height: 50px;
  width: 120px;
`;

const Footer = () => (
  <Wrapper>
    <PreviousBtn>Previous</PreviousBtn>
    <NextBtn>Next</NextBtn>
  </Wrapper>
);

export default Footer;
