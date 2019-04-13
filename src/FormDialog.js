import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


export default class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.setInitValue = this.setInitValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setInitValue(this.props.action, this.props.initVal);
  }

  state = {
    open: false,
    firstName: '',
    lastName: '',
    age: ''
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    if (this.props.action === 'newMember') {
      this.setState({
        firstName: '',
        lastName: '',
        age: ''
      });
    }
  }

  handleChange(e) {

    switch (e.target.id) {
      case "firstName":
        this.setState({
          firstName: e.target.value
        });
        break;
      case "lastName":
        this.setState({
          lastName: e.target.value
        });
        break;
      case "age":
        this.setState({
          age: e.target.value
        });
        break;
      default:
        break;
    }
  }

  setInitValue(action, initVal) {
    if (action === 'editMember' && initVal) {
      this.setState(initVal);
    }
  }
  

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          {this.props.action==="newMember"?'Add':'Edit'}
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
        <form onSubmit={this.handleSubmit}>
          <DialogContent>
            <DialogContentText>
            {this.props.action==="newMember"?'Add':'Edit'}  a member
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="firstName"
              label="First Name"
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="lastName"
              label="Last Name"
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="age"
              label="Age"
              type="text"
              value={this.state.age}
              onChange={this.handleChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={this.handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}
