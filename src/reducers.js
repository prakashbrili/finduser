import {REPO_LIST_LOAD_FAIL, REPO_LIST_LOAD_SUCCESS, REPO_LIST_LOADING, SEARCH_USER} from './actions';

const initialState = {
    repoList: [],
    filteredRepoList: [],
    loading: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case REPO_LIST_LOADING: {
            return {
                ...state,
                loading: true,
                repoList: []
            };
        }
        case REPO_LIST_LOAD_SUCCESS: {
            return {
                ...state,
                repoList: action.repoList,
                filteredRepoList: action.repoList,
                loading: false
            };
        }
        case REPO_LIST_LOAD_FAIL: {
            return {
                ...state,
                message: action.message,
                filteredRepoList: []
            };
        }
        case SEARCH_USER: {
            return {
                ...state,
                searchText: action.searchText,
                filteredRepoList: [...state.repoList.filter(repo => repo.name.indexOf(action.searchText) >= 0)],
            };
        }
        default:
            return {...state};
    }
}