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
  width: 750px;
  border: 1px solid #000000;
`;

const ContentWrapper = styled.div`
  padding: 50px;
  color: #262626;
`;

const Servive = styled.h2`
  margin: 50px 0px 40px;
  font-size: 40px;
  font-weight: 700;
  line-height: 55px;
  color: #262626;
`;

const Form = styled.form`
  margin: 40px 0px 50px;
  > *:not(:first-child) {
    margin-top: 40px;
  }
`;

const ChooseMethod = styled.h2`
  font-size: 50px;
  font-weight: 700;
  line-height: 68px;
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
