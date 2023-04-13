import React from 'react';
import styled from 'styled-components';

import Button from './shared/Button';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 25px 0px;
`;

const PaymentMethods = () => (
  <Wrapper>
    <Button active>Cash</Button>
    <Button>Credit card</Button>
    <Button>eWallet/ Virtual bank</Button>
  </Wrapper>
);

export default PaymentMethods;
