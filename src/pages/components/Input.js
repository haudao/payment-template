import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  color: #262626;
  font-size: 30px;
  font-weight: 600;
  line-height: 40px;
`;

const Input = styled.input`
  height: 100px;
  border-radius: 12px;
  border: 1px solid #d3dee9;
  width: 100%;
  background-color: transparent;
  color: #262626;
  margin-top: 20px;
  font-size: 30px;
  font-weight: 400;
  line-height: 40px;
  padding: 30px 26px;

  &::placeholder {
    color: #d3dee9;
  }
`;

const FormInput = ({ id, label, placeholder }) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} placeholder={placeholder} />
  </div>
);

export default FormInput;
