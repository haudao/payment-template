import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import Card from './shared/Card';

const ServiceWrapper = styled(Card)`
  display: flex;
  align-items: center;
  padding: 34px;
  color: #262626;
`;

const ServiveImage = styled(Image)`
  border-radius: 12px;
`;

const DetailsWrapper = styled.div`
  margin-left: 24px;

  > *:not(:first-child) {
    margin-top: 12px;
  }
`;

const BoldText = styled.div`
  font-size: 30px;
  font-weight: 600;
  line-height: 40px;
`;

const LightText = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 27px;
  color: #718096;
`;

const IconImg = styled(Image)`
  margin-right: 14px;
`;

const ServiceDetails = () => (
  <ServiceWrapper>
    <ServiveImage
      alt="service-img"
      src="/service.png"
      width={120}
      height={120}
    />
    <DetailsWrapper>
      <BoldText>Japanese lessons</BoldText>
      <LightText>
        <IconImg
          alt="calendar-icon"
          src="/calendar.svg"
          width={22}
          height={22}
        />
        Nov 7, 2020 · 11:30
      </LightText>
      <LightText>
        <IconImg
          alt="location-icon"
          src="/location.svg"
          width={22}
          height={22}
        />
        {'Client`s place'}
      </LightText>
      <BoldText>Rp 350.000</BoldText>
    </DetailsWrapper>
  </ServiceWrapper>
);

export default ServiceDetails;
