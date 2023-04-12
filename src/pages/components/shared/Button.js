import styled from 'styled-components';

const Button = styled.button`
  flex-shrink: 0;
  height: 100px;
  width: 315px;
  color: #262626;
  background-color: ${({ active }) => (active ? '#ffffff' : '#edf2f7')};
  border-radius: 12px;
  border: ${({ active }) => (active ? '1px solid #262626' : 'none')};
  font-size: 30px;
  font-weight: 600;
  line-height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0px 50px;
`;

export default Button;
