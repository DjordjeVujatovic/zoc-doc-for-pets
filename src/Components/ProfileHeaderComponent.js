import React from 'react';
import styled from 'styled-components';

const ProfileHeaderContainer = styled.div`
  background: linear-gradient(0deg, white 65%, #2D61F6 35%) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 5px grey;
  margin-bottom: 1rem;
`;

const DoctorContainer = styled.div`
  background: deepskyblue;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin: 1.5rem 0;
`;

const DoctorRatingContainer = styled.div`
`;

const DoctorDescriptionContainer = styled.div`
  padding: 14px 4rem;
`;

const ProfileHeaderComponent = () => {
  return (
    <ProfileHeaderContainer>
      <DoctorContainer />
      <DoctorRatingContainer>
        <div>Doctor Name</div>
        <div>Doctor Rating</div>
      </DoctorRatingContainer>
      <DoctorDescriptionContainer>
        <p>"The most comprehensive veterinary care in Silicon Valley. Welcome to Serra Veterinary Hospital, Inc"</p>
      </DoctorDescriptionContainer>
    </ProfileHeaderContainer>
  )
}

export default ProfileHeaderComponent;
