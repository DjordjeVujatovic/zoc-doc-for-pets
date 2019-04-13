import React from 'react';
import styled from 'styled-components';
import FormGroup from '@material-ui/core/FormGroup';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import CalendarComponent from './CalendarComponent';
import ButtonComponent from './ButtonComponent';

const FormContainer = styled.div`
  margin: 0 16px;
  text-align: left;
`;

const ButtonsContainer = styled.div`
  margin: 0 8px;
`;

const FormComponent = () => {
  return (
    <div>
    <FormContainer>
      <FormGroup>
        <p>Select Pet Type</p>
        <Select/>
        <p>Select Service</p>
        <Select/>
        <p>Owner Name</p>
        <TextField />
      </FormGroup>
    </FormContainer>
    <CalendarComponent />
    <ButtonsContainer>
      <ButtonComponent backgroundColor="white" textColor="black" buttonText="Cancel"/>
      <ButtonComponent backgroundColor="#2D61F6" textColor="white" buttonText="Book Appointment"/>
    </ButtonsContainer>
    </div>
  )
}

export default FormComponent;
