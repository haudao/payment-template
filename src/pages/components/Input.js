import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  color: #262626;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
`;

const Input = styled.input`
  height: 50px;
  border-radius: 6px;
  border: 1px solid #d3dee9;
  width: 100%;
  background-color: transparent;
  color: #262626;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  padding: 15px;

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
