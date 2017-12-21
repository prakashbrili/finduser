import React, {Component} from "react";
import {connect} from "react-redux";
import RepoSearchComponent from "./../components/RepoSearch.component";

@connect((store) => {
    return {
    };
})

class RepoSearchContainer extends Component {

    render() {

        const {dispatch} = this.props;
        return (
            <RepoSearchComponent dispatch={dispatch}/>
        )
    }
}

export default RepoSearchContainer