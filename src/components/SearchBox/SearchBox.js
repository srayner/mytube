import React, {Component} from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    
    state = {
        searchText: ''
    }

    changeHandler = (event) => {
        this.setState({searchText: event.target.value});
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchText);  
        return false;
    }

    render() {
        return (
            <form className="SearchBox" onSubmit={(event) => this.submitHandler(event)}>
                <input type="text" onChange={(event) => this.changeHandler(event)}/>
                <button type="submit" className="search"><i className="fas fa-search"></i></button>
            </form>
        );
    }
}

export default SearchBox;
