import React from 'react';
import CardComponent from '../components/CardComponent';
import { robots } from '../robots';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {

    filteredList = robots;

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState(
            {
                searchField: event.target.value
            }
        );
    }

    render() {
        const { robots, searchField } = this.state;
        this.filteredList = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
        return !robots.length ? 
            <h1>Loading</h1> : 
            (
                <div  className='tc'>
                    <h1 className='f1'>ROBOFRIENDS</h1>
                    <SearchBar onSearchChange={this.onSearchChange} />
                    {/* <Scroll> */}
                        <CardComponent robots={this.filteredList} />
                    {/* </Scroll> */}
                </div>
            );
    }
}

export default App;