import React, { Suspense } from 'react';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import SystemUI from 'modules/+core/ui';
export const history = require("history").createBrowserHistory();
const {Internal} = SystemUI

interface IRoutesProps {};


const Routes: React.FunctionComponent<IRoutesProps> = (props: IRoutesProps) => {

    const MDashBoard = React.lazy(() =>
        import("./modules/+dashboard/module")
    );

    return (
        <Router history={history}>
            <Suspense fallback={<Internal.Loading/>}>
                <Switch>
                    <Route exact path="/dashboard/" component={ MDashBoard }></Route>
                    <Route exact path="/dashboard**" component={ MDashBoard }></Route>
                    <Route>
                        <Redirect to="/dashboard"></Redirect>
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    )
}

export default Routes;
