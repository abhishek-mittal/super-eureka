// store/session/reducers.ts
import { combineReducers } from 'redux'
import { Action } from './../actions'
import { TCatalog, TLocationMap, TBranchMap } from '../../shared/pseudo-api'
// States' definition
export interface IDashboard {
    isFetching: boolean
    branchMap?: TBranchMap,
    locationMap?: TLocationMap,
    catalog?: TCatalog
}
export interface State {
    dashboardSession: IDashboard
}
const dashboardSession = (state: IDashboard = { isFetching: false }, action: Action): IDashboard => {
    switch (action.type) {
        case 'SET':
            return { ...state, catalog: action.catalog, locationMap: action.locationMap, branchMap: action.branchMap }
        case 'SET_FETCHING':
            return { ...state, isFetching: Boolean(action.isFetching) }
        default :
            return {...state};
    }
}

const reducer = combineReducers<State>({
    dashboardSession
})

export type TRootState = ReturnType<typeof reducer>;
export default reducer;