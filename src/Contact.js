import React from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectorChange = this.handleSelectorChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
    }

    state = {
        contactType: '',
    };

    componentDidMount() {
        this.setState({
            email: this.props.email,
            facebook: this.props.facebook,
            line: this.props.line,
        });
    }

    handleSelectorChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleContactChange(e) {
        const contactType = this.state.contactType;
        this.setState({
            [contactType]: e.target.value
        });
        var ret = {
            ...e,
            contactType: contactType,
            [contactType]: e.target.value
        }
        this.props.onChange(ret);
    }
  
  render() {
    return (
        <div>
        <FormControl>
          <InputLabel shrink htmlFor="contactType-label-placeholder">
            Contact
          </InputLabel>
          <Select
            value={this.state.contactType}
            onChange={this.handleSelectorChange}
            input={<Input name="contactType" id="contactType-label-placeholder" />}
            displayEmpty
            name="contactType"
          >
            <MenuItem value="">
              <em>Choose</em>
            </MenuItem>
            <MenuItem value={'line'}>Line</MenuItem>
            <MenuItem value={'email'}>E-mail</MenuItem>
            <MenuItem value={'facebook'}>Facebook</MenuItem>
          </Select>
        </FormControl>

        <TextField
            margin="none"
            id="contact"
            disabled={this.state.contactType?false:true}
            label={this.state.contactType}
            onChange={this.handleContactChange}
            value={this.state.contactType?this.state[this.state.contactType]:''}
            type="text"
        />
        </div>
    );
  }
}

Contact.propTypes = {};

export default Contact;