import React from 'react';
import { connect } from 'react-redux';
import { RouteChildrenProps } from 'react-router-dom';
import { RootState } from '../../store';
import { fetchAllCatalog } from '../../store/actions';
import CNavbar from './components/navbar';
import DashboardRoutes from './routes';
import { IDashboard } from 'store/reducers';

interface IDashboardProps extends RouteChildrenProps {
    fetchAllCatalog: Function;
    dasboardSession: IDashboard;
}



class Dashboard extends React.Component<IDashboardProps, {}> {

    componentDidMount() {
        this.props.fetchAllCatalog();
    }

    render() {

        const { locationMap } = this.props.dasboardSession;

        return (
            <>
                <CNavbar locationMap={locationMap}/>
                <DashboardRoutes />
            </>
        )
    }
}


const mapStateToProps = (state: RootState) => ({
    dasboardSession: state.session.dashboardSession
})

const mapDispatchToProps = {
    fetchAllCatalog
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
