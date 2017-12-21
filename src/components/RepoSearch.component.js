import React, {Component} from "react";
import {filterRepo} from "./../actions";

class RepoSearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            searchText: ""
        })
    }

    onTextChange = (event) => {
        this.props.dispatch(filterRepo(event.target.value));
        this.setState({searchText: event.target.value});
    }

    onClearClick = () => {
        this.setState({searchText: ""});
        this.props.dispatch(filterRepo(""));
    }

    render() {
        const {dispatch} = this.props
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" className="text" onChange={this.onTextChange} value={this.state.searchText}/>
                    <input type="button" className="button" value="Clear" onClick={this.onClearClick}
                           placeholder="Enter some keyword to filter Eg: algo"/>
                </div>
            </form>

        )
    }
}

export default RepoSearchComponent