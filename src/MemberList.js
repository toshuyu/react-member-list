import React from 'react';
//import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
//import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import TableSortLabel from '@material-ui/core/TableSortLabel';
//import Paper from '@material-ui/core/Paper';
import FormDialog from './FormDialog';
//mport Button from '@material-ui/core/Button';
import DelButton from './DelButton';

class MemberList extends React.Component {
    constructor(props) {
        super(props);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
        this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
    }

    handleEditSubmit(editingMember){
        this.props.onSubmit(editingMember);
    }
    handleDeleteSubmit(id){
        this.props.onDelete(id);
    }

    render() {
        const member = this.props.member;
        
        return (
            
                <Table>
                    <TableBody>
                    {member
                    .map(m => (
                        <TableRow key={m.id}>
                            <TableCell align="right">{m.firstName}</TableCell>
                            <TableCell align="right">{m.lastName}</TableCell>
                            <TableCell align="right">{m.age}</TableCell>
                            <TableCell align="right"><FormDialog onSubmit={this.handleEditSubmit} action="editMember" initVal={m}></FormDialog></TableCell>
                            <TableCell align="right"><DelButton onDelete={this.handleDeleteSubmit} ind={m.id}></DelButton></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            
            
            );
    }
}

MemberList.propTypes = {
    
};  

export default MemberList;