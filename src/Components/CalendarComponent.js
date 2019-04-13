import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import {  MuiPickersUtilsProvider, DatePicker, TimePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';

const PickerContainer = styled.div`
  margin: 0 6px;
`;

class MaterialUIPickers extends React.Component {
  state = {
    // The first commit of Material-UI
    selectedDate: new Date('2014-08-18T21:11:54'),
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="center">
        <PickerContainer>
          <DatePicker
            margin="normal"
            label="Date picker"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
          </PickerContainer>
          <PickerContainer>
          <TimePicker
            margin="normal"
            label="Time Picker"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
          </PickerContainer>
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}

export default (MaterialUIPickers);
