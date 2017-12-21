import React, {Component} from "react";
import {getRepoList} from "./../actions";

class UsernameComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            username: ""
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
    }

    onTextChange = (event) => {
        this.setState({username: event.target.value});
    }

    onGoClick = () => {
        this.props.dispatch(getRepoList(this.state.username))
    }

    onClearClick = () => {
        this.setState({username: ""});
        this.props.dispatch(getRepoList(""))
    }

    render() {
        const {dispatch} = this.props
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" className="text" onChange={this.onTextChange} placeholder="Enter an username" value={this.state.username}/>
                    <input type="button" className="button" value="Go" onClick={this.onGoClick}/>
                    <input type="button" className="button" value="Clear" onClick={this.onClearClick}/>
                </div>
            </form>
        )
    }
}

export default UsernameComponent