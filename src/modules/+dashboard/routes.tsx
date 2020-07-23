import SystemUI from 'modules/+core/ui';
import React, { Suspense } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { history } from 'root-routes';
import Content from './pages/Content';
import Landing from './pages/Landing';
const { Internal } = SystemUI;

interface IDashboardRoutesProps { };
const DashboardRoutes: React.FunctionComponent<IDashboardRoutesProps> = (props: IDashboardRoutesProps) => {

    return (
        <Router history={history}>
            <Suspense fallback={<Internal.Loading />}>
                <Switch>
                    <Route exact path="/dashboard/" component={Landing} />
                    <Route exact path="/dashboard/:location/:branch" >
                        <Content />
                    </Route>
                    <Route>
                        <Redirect to="/dashboard"></Redirect>
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    )
}

export default DashboardRoutes;
