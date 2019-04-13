import React, { Component } from 'react';
import styled from 'styled-components';
import FormGroup from '@material-ui/core/FormGroup';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import CalendarComponent from './CalendarComponent';
import ButtonComponent from './ButtonComponent';
import ModalComponent from './ModalComponent';
import Typography from '@material-ui/core/Typography'

const FormContainer = styled.div`
  margin: 0 16px;
  text-align: left;
`;

const ButtonsContainer = styled.div`
  margin: 0 8px;
`;

class FormComponent extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.subtitle.style.color = 'red';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
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
          <ModalComponent />
          <ButtonComponent backgroundColor="white" textColor="black" buttonText="Cancel"/>
        </ButtonsContainer>
      </div>
    )
  }
}
export default FormComponent;
