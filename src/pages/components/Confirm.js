import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: inline-flex;
  position: relative;
  margin-bottom: 50px;
`;

const HiddenInput = styled.input`
  display: none;
`;

const Text = styled.span`
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  color: #718096;
  margin-left: 30px;

  > a {
    color: #1e21ff;
    text-decoration: underline;
  }

  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border: 2px solid #616161;
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
