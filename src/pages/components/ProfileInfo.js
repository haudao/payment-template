import React from 'react';
import styled from 'styled-components';

import Card from './shared/Card';

const ProfileWrapper = styled(Card)`
  display: flex;
  align-items: center;
  padding: 20px;
  color: #262626;
`;

const Avatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #edf2f7;
  display: flex;
  justify-content: center;

  > span {
    margin-top: 6px;
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
  }
`;

const ContactWrapper = styled.div`
  flex: 1;
  margin-left: 12px;
`;

const ProfileName = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
`;

const PhoneNumber = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: #718096;
`;

const LogOutBtn = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #edf2f7;
  padding: 12px;
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
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
