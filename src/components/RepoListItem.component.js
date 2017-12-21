import React, {Component} from "react";
import {addToCart} from "../actions";

class RepoListItemComponent extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {repo, searchText} = this.props
        let repoName = repo.name.split(searchText);
        debugger;
        return (
            <div className="repoListItem">
                {
                    repoName.map((chars, index) => {
                        return (
                            <span>
                            <span>{chars}</span>
                                {index < repoName.length - 1 ? (<span className="matched">{searchText}</span>) : ""}
                            </span>
                        )
                    })
                }

            </div>
        )
    }
}

export default RepoListItemComponent