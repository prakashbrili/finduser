import React, {Component} from "react";
import {connect} from "react-redux";
import UsernameComponent from "./../components/Username.component"

@connect((store) => {
    return {};
})

class UsernameContainer extends Component {

    render() {
        const {dispatch} = this.props;
        return (
            <UsernameComponent dispatch={dispatch}/>
        )
    }
}

export default UsernameContainer;