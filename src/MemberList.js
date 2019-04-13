import React from 'react';
//import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormDialog from './FormDialog';
import DelButton from './DelButton';

class MemberList extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
  }

  handleEditSubmit(editingMember) {
    this.props.onSubmit(editingMember);
  }
  handleDeleteSubmit(id) {
    this.props.onDelete(id);
  }

  render() {
    const member = this.props.member;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">First name</TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {member.map(m => (
            <TableRow key={m.id}>
              <TableCell align="right">{m.firstName}</TableCell>
              <TableCell align="right">{m.lastName}</TableCell>
              <TableCell align="right">{m.age}</TableCell>
              <TableCell align="right">
                <FormDialog onSubmit={this.handleEditSubmit} action="editMember" initVal={m}></FormDialog>
              </TableCell>
              <TableCell align="right">
                <DelButton onDelete={this.handleDeleteSubmit} ind={m.id}></DelButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

MemberList.propTypes = {};

export default MemberList;