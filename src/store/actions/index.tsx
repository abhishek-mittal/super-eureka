import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import * as API from './../../shared/pseudo-api';

export interface SetAction {
    type: 'SET'
    catalog: API.TCatalog,
    locationMap: API.TLocationMap,
    branchMap: API.TBranchMap
}
export interface SetFetcing {
    type: 'SET_FETCHING'
    isFetching: boolean
}

// Union Action Types
export type Action = Partial<SetAction | SetFetcing>
// // Action Creators
export const set = (catalog: API.TCatalog, locationMap: API.TLocationMap, branchMap: API.TBranchMap): SetAction => {
    return { type: 'SET', catalog, locationMap, branchMap }
}
export const isFetching = (isFetching: boolean): SetFetcing => {
    return { type: 'SET_FETCHING', isFetching }
}
export const fetchAllCatalog = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    // Invoke API
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch(isFetching(true))
        console.log('Login in progress');
        const catalog = await API.getAllCatalog();

        if (!catalog || !catalog.locations.length) {
            dispatch(isFetching(false))
            return;
        }

        const LocationMap: API.TLocationMap = {};
        const BranchMap: API.TBranchMap = {};

        catalog.locations.forEach(e => {
            const key: string = e.name + '';

            LocationMap[key] = {
                branches: e.branches.map(b => b.name),
                dealers_id: e.dealers_id,
                opco: e.opco,
            };

            e.branches.forEach(b => {
                const key = b.name + '';
                BranchMap[key] = b
            })

            return key;
        });

        dispatch(set(catalog, LocationMap, BranchMap));
        dispatch(isFetching(false))
    }
}