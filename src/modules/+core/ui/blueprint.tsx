import { Breadcrumb, Breadcrumbs, IBreadcrumbProps, Menu } from "@blueprintjs/core";
import React from "react";


 
class Breadcrumber extends React.Component<{ breadcrumbs: IBreadcrumbProps[] }, {}> {
    public render() {
        return (
            <Breadcrumbs
                currentBreadcrumbRenderer={this.renderCurrentBreadcrumb}
                items={this.props.breadcrumbs}
             />
        );
    }
    private renderCurrentBreadcrumb = ({ text, ...restProps }: IBreadcrumbProps) => {
        // customize rendering of last breadcrumb
        return <Breadcrumb {...restProps}>{text}</Breadcrumb>;
    };
}

export default {
    Menu: Menu,
    Breadcrumb: Breadcrumber
}