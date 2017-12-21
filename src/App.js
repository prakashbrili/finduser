import React, {Component} from "react";
import UsernameContainer from "./containers/Username.container";
import RepoSearchContainer from "./containers/RepoSearch.container";
import RepoListContainer from "./containers/RepoList.container";

class App extends Component {

    render() {
        return (
            <div className="main">
                <div className="form-container">
                    <UsernameContainer/>
                    <RepoSearchContainer/>
                </div>
                <RepoListContainer/>
            </div>
        );
    }
}

export default App;