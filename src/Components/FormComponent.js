import React, { Component } from 'react';
import styled from 'styled-components';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import CalendarComponent from './CalendarComponent';
import ButtonComponent from './ButtonComponent';
import ModalComponent from './ModalComponent';
import { connect } from 'react-redux';
import cat from '../Assets/cat.png';

const FormContainer = styled.div`
  margin: 0 16px;
  padding: 16px 0;
  text-align: left;
`;

const ButtonsContainer = styled.div`
  margin: 16px 8px;
`;

const StyledImage = styled.img`
  height: 125px;
  width: 125px;
  margin: 1.5rem 0;
`;

const StyledHeaders = styled.p`
  color: #2D61F6;
  font-weight: 500;
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
              <StyledHeaders>Pet Type</StyledHeaders>
              <Input placeholder="Example: Large dog" />
              <StyledHeaders>Service Type</StyledHeaders>
              <Input placeholder="Example: Routine grooming" />
              <StyledHeaders>Owner Name</StyledHeaders>
              <Input placeholder="Example: Shaggy Rogers" />
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
