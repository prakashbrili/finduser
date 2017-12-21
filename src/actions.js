import axios from 'axios';

export const REPO_LIST_LOAD_SUCCESS = "REPO_LIST_LOAD_SUCCESS";
export const REPO_LIST_LOAD_FAIL = "REPO_LIST_LOAD_FAIL";
export const REPO_LIST_LOADING = "REPO_LIST_LOADING";
export const SEARCH_USER = "SEARCH_USER";

export function getRepoList(username) {
    return function (dispatch) {
        if (username == "") {
            dispatch({type: REPO_LIST_LOAD_SUCCESS, repoList: []});
        } else {
            dispatch({type: REPO_LIST_LOADING});
            axios.get("https://api.github.com/users/" + username + "/repos").then((response) => {
                if (response.status === 200) {
                    dispatch({type: REPO_LIST_LOAD_SUCCESS, repoList: response.data});
                } else {
                    dispatch({type: REPO_LIST_LOAD_FAIL, message: "Some error occurred"});
                }
            }).catch((err) => {
                dispatch({type: REPO_LIST_LOAD_FAIL, message: "Some error occurred"});
            })
        }
    }
}

export function filterRepo(searchText) {
    return function (dispatch) {
        dispatch({type: SEARCH_USER, searchText: searchText});
    }
}