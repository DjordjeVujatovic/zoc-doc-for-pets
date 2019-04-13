import React from 'react';
import styled from 'styled-components';
import rating from '../Assets/rating.png';
import doctor from '../Assets/doc02.png';

const ProfileHeaderContainer = styled.div`
  background: linear-gradient(0deg,white 75%,#2D61F6 0%) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 5px grey;
  margin-bottom: 1rem;
`;

const DoctorContainer = styled.img`
  background: deepskyblue;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin: 1.25rem 0;
  border: 3px solid white;
  box-shadow: 0px 5px 10px 0px grey;
`;

const DoctorDescriptionContainer = styled.div`
  padding: 0px 3rem;
  line-height: 22px;
`;

const RatingImage = styled.img`
  width: 200px;
  margin: 10px 0;
`;

const DoctorName = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  line-height: 16px;
  text-align: center;
  color: #2D61F6;
  margin: 8px 0;
`;

const DoctorContactInfoContainer = styled.div`
  text-align: center;
  margin-bottom: 16px;

`;

const DoctorInfo = styled.p`
  margin: 6px 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;

const StyledText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;
const ProfileHeaderComponent = () => {
  return (
    <ProfileHeaderContainer>
      <DoctorContainer src={doctor} />
      <div>
        <DoctorName>Dr. Monika Fischer</DoctorName>
        <RatingImage src={rating}/>
      </div>
      <DoctorDescriptionContainer>
        <StyledText>“The Most Comprehensive Veterinary Care In Silicon Valley Welcome to Serra Veterinary Hospital, Inc.”</StyledText>
      </DoctorDescriptionContainer>
      <DoctorContactInfoContainer>
        <DoctorInfo>Specialty: Dogs, cats, and horses</DoctorInfo>
        <DoctorInfo>Email: monika.fischer@gmail.com</DoctorInfo>
        <DoctorInfo>Contact: +1 405 232 567</DoctorInfo>
      </DoctorContactInfoContainer>
    </ProfileHeaderContainer>
  )
}

export default ProfileHeaderComponent;
