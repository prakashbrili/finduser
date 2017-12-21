import React, {Component} from "react";
import {addToCart} from "../actions";
import RepoListItemComponent from "./RepoListItem.component";

class RepoListComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {repoList, searchText, dispatch, loading} = this.props
        return (
            <div>
                {
                    loading ? (<div>Loading..</div>) :
                        repoList.map((repo, index) => {
                                return (
                                    <RepoListItemComponent repo={repo} key={index} dispatch={dispatch}
                                                           searchText={searchText}/>
                                )
                            }
                        )

                }
            </div>

        )
    }
}

export default RepoListComponent