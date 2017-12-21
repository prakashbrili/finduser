import React, {Component} from "react";
import {connect} from "react-redux";
import RepoListComponent from "./../components/RepoList.component";

@connect((store) => {
    return {
        filteredRepoList: store.filteredRepoList,
        searchText: store.searchText,
        loading: store.loading
    };
})

class RepoListContainer extends Component {

    render() {
        const {filteredRepoList, searchText, dispatch, loading} = this.props;
        return (
            <RepoListComponent repoList={filteredRepoList} searchText={searchText} dispatch={dispatch} loading={loading}/>
        )
    }
}

export default RepoListContainer