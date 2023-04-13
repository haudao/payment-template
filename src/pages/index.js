import React from 'react';
import styled from 'styled-components';
import { Noto_Sans } from 'next/font/google';

import Header from './components/Header';
import ProfileInfo from './components/ProfileInfo';
import ServiceDetails from './components/ServiceDetails';
import FormInput from './components/Input';
import PaymentMethods from './components/PaymentMethods';
import Confirm from './components/Confirm';
import Footer from './components/Footer';

const notoSans = Noto_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const Container = styled.div`
  width: 100%;
  max-width: 390px;
`;

const ContentWrapper = styled.div`
  padding: 30px;
  color: #262626;
`;

const Servive = styled.h2`
  margin: 25px 0px 20px;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: #262626;
`;

const Form = styled.form`
  margin: 20px 0px 25px;
  > *:not(:first-child) {
    margin-top: 20px;
  }
`;

const ChooseMethod = styled.h2`
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
`;

const PaymentTemplate = () => (
  <Container className={notoSans.className}>
    <Header />
    <ContentWrapper>
      <ProfileInfo />
      <Servive>Selected service</Servive>
      <ServiceDetails />
      <Form>
        <FormInput label="Enter your location" placeholder="Enter address" />
        <FormInput label="Note (optional)" placeholder="Enter text here" />
      </Form>
      <ChooseMethod>Choose a way to pay</ChooseMethod>
      <PaymentMethods />
      <Confirm />
    </ContentWrapper>
    <Footer />
  </Container>
);

export default PaymentTemplate;
