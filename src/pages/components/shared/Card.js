import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #d3dee9;
  border-radius: 15px;
  background-color: ${({ hasBackgroundColor }) =>
    hasBackgroundColor ? '#f7fafc' : 'transparent'};
`;

export default Card;
