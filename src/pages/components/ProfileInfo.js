import React from 'react';
import styled from 'styled-components';

import Card from './shared/Card';

const ProfileWrapper = styled(Card)`
  display: flex;
  align-items: center;
  padding: 36px 39px;
  color: #262626;
`;

const Avatar = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #edf2f7;
  display: flex;
  justify-content: center;

  > span {
    margin-top: 11px;
    font-size: 40px;
    line-height: 55px;
    font-weight: 700;
  }
`;

const ContactWrapper = styled.div`
  flex: 1;
  margin-left: 26px;
`;

const ProfileName = styled.p`
  font-size: 40px;
  font-weight: 600;
  line-height: 55px;
`;

const PhoneNumber = styled.p`
  font-size: 26px;
  font-weight: 500;
  line-height: 35px;
  color: #718096;
`;

const LogOutBtn = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #edf2f7;
  padding: 28px 24px;
  font-size: 26px;
  font-weight: 600;
  line-height: 34px;
  color: #262626;
`;

const ProfileInfo = () => (
  <ProfileWrapper hasBackgroundColor>
    <Avatar>
      <span>J</span>
    </Avatar>
    <ContactWrapper>
      <ProfileName>John</ProfileName>
      <PhoneNumber>(88) 99602-2404</PhoneNumber>
    </ContactWrapper>
    <LogOutBtn>Log out</LogOutBtn>
  </ProfileWrapper>
);

export default ProfileInfo;
