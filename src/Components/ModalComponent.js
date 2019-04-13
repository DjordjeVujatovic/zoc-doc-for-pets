import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { setBookingState } from '../redux/bookingStateActions';
import Modal from '@material-ui/core/Modal';
import ButtonComponent from './ButtonComponent';
import styled from 'styled-components';
import WomanDog from '../Assets/woman&dog.png';
import { connect } from 'react-redux';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: '285px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});


const StyledModal = styled.div`
  top: 45%;
  left: 56.5%;
  transform: translate(-57%, -47%);
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledImage = styled.img`
  height: 200px;
  width: 200px;
  margin: 1.5rem 0;
`;
class SimpleModal extends React.Component {
  state = {
    open: false,
    bookingConfirmed: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.setBookingState();
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography gutterBottom>Click to get the full Modal experience!</Typography>
        <ButtonComponent backgroundColor="#2D61F6" textColor="white" buttonText="Book Appointment" onClick={this.handleOpen}/>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <StyledModal className={classes.paper}>
            <StyledImage src={WomanDog}/>
            <Typography variant="subtitle1" id="simple-modal-description">
              Great, we’ve got you
              confirmed for your appoitment!
              You'll receive a confirmation via text too.
            </Typography>
            <ButtonComponent backgroundColor="#2bd594" textColor="white" buttonText="Thank you" onClick={this.handleClose}/>
          </StyledModal>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);
const mapStateToProps = state => ({
  bookingState: state.bookingState,
});

const mapDispatchToProps = dispatch => ({
  setBookingState: () => {
    dispatch(setBookingState());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleModalWrapped);
