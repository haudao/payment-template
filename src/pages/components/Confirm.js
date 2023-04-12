import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: inline-flex;
  position: relative;
  margin-bottom: 107px;
`;

const HiddenInput = styled.input`
  display: none;
`;

const Text = styled.span`
  font-size: 26px;
  font-weight: 500;
  line-height: 35px;
  color: #718096;
  margin-left: 55px;

  > a {
    color: #1e21ff;
    text-decoration: underline;
  }

  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border: 3px solid #616161;
    border-radius: 4px;
    left: 0;
  }
`;

const Confirm = () => (
  <Label htmlFor="confirm">
    <HiddenInput id="confirm" type="checkbox" />
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{' '}
      <a>do eiusmod</a>
    </Text>
  </Label>
);

export default Confirm;
