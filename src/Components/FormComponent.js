import React, { Component } from 'react';
import styled from 'styled-components';
import FormGroup from '@material-ui/core/FormGroup';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import CalendarComponent from './CalendarComponent';
import ButtonComponent from './ButtonComponent';
import ModalComponent from './ModalComponent';
import { connect } from 'react-redux';
import cat from '../Assets/cat.png';

const FormContainer = styled.div`
  margin: 0 16px;
  text-align: left;
`;

const ButtonsContainer = styled.div`
  margin: 0 8px;
`;

const StyledImage = styled.img`
  height: 125px;
  width: 125px;
  margin: 1.5rem 0;
`;

class FormComponent extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };
  }

  render() {
    console.log(this.props.bookingState)
    const {bookingState} = this.props;
    return (
      <div>
        {!bookingState.bookingComplete &&
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
      }
      {
        <div>
          {
            bookingState.bookingComplete &&
            <div>
              <StyledImage src={cat} />
              <p>Thank you for your booking!</p>
              <p>Looking forward to seeing you soon</p>
            </div>
          }
        </div>
      }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bookingState: state.bookingState,
});

export default connect(mapStateToProps)(FormComponent);
