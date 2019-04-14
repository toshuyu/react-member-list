import React, { Component } from 'react';
import './App.css';
import MemberList from './MemberList';
import FormDialog from './FormDialog';
import mockLib from './mock';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
    this.state = {
      member: mockLib.flattenMock(mockLib.mock)
    };
  }

  handleSubmit(newMember) {
    var m = Object.assign([], this.state.member);
    var obj = Object.assign({}, newMember);
    obj.id = m.length;
    delete obj.open;
    m.push(obj);
    this.setState({
      member: m
    });
  }

  handleEditSubmit(editingMember) {
    var m = Object.assign([], this.state.member);
    var obj = Object.assign({}, editingMember);
    delete obj.open;
    m[obj.id] = obj;
    this.setState({
      member: m
    });
  }

  handleDeleteSubmit(id) {
    var m = Object.assign([], this.state.member);
    delete m[id];
    this.setState({
      member: m
    });
  }

  render() {
    const m = this.state.member;
    return (
      <div className="App">
        <MemberList member={m} onSubmit={this.handleEditSubmit} onDelete={this.handleDeleteSubmit}></MemberList>
        <FormDialog onSubmit={this.handleSubmit} action="newMember"></FormDialog>
      </div>
    );
  }
}

export default App;
