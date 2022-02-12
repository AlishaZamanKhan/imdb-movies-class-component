import React, { Component } from 'react';

class Students extends Component {
    state = {
        headers: ['ROLL', 'NAME'],
        students: [
            {roll: '1', name:'Alisha'},
            {roll: '2', name:'Pranto'},
            {roll: '3', name:'Anwar'}
        ]
    };
    render() { 
        const columns = [
            { label: 'ROLL', path:'roll', content = item => <td>{item}</td>},
            { label: 'NAME', path:'name', content = item => <td>{item}</td>}

        ]
        return (
            <>
                <Table
                     headers={this.state.headers}
                     data={this.state.students}
                     columns={this.state.columns}/>
            </>
        );
    }
}
 
export default Students;