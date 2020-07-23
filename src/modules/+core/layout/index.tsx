import React, { Component } from 'react';

interface ILayout {
    children: React.ReactNode;
}

export class Layout extends Component<ILayout, {}> {
    render() {

        const { children } = this.props;

        if (!children) {
            return null;
        }

        return (
            <div>
                { children }
            </div>
        )
    }
}


export default Layout;
