import React from 'react';
import Button from '@material-ui/core/Button';

export default class DelButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
    }
    handleDeleteSubmit(e){
        this.props.onDelete(this.props.ind);
    }

    render() {
        return (
            <Button variant="outlined" color="primary" onClick={this.handleDeleteSubmit}>
            Delete
            </Button>  
        );
    }
}
