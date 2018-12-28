import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

// https://www.npmjs.com/package/react-table
// https://react-table.js.org/#/story/simple-table
export default class Table extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            columns: [
                { Header: 'Name', accessor: 'name', sortable: true, minWidth: 500},
                { Header: 'Age', accessor: 'age'},
                { Header: 'City', accessor: 'city'}
            ],
            loading: false
        }
    }
    onClick(){
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({
                data: [
                    { name: 'Tanner Linsley', age: 26, city: 'Hyderabad' },
                    { name: 'Neha', age: 26, city: 'Hyderabad' }
                ],
                loading: false
            });
        }, 5000);
    }
    render() {
        const { data, columns, loading } = this.state;
       
        return (
            <div>
                <input type='button' value='Load' onClick={this.onClick.bind(this)} />
                <ReactTable
                    loading={loading}
                    loadingText= {'Data is Loading...'}
                    data={data}
                    columns={columns}
                    showPagination={false}
                    minRows={5}
                />
            </div>
        );
      }
}
