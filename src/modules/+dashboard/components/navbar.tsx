import { Button, Menu, MenuItem, Navbar, NavbarGroup, NavbarHeading, Popover, Position } from '@blueprintjs/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { INavbarMenuProps, INavbarProps } from '../@types';

const MENU: React.FunctionComponent<any> = (props: INavbarMenuProps) => {
    if (!props.locations.length) return null;
    return (<Menu>
        {props.locations.map( e => <MenuItem text={e}>
            {
                props.locationMap[e].branches && props.locationMap[e].branches?.map((b: string) =>
                    <Link to={`/dashboard/${e}/${b}`}><MenuItem text={b} /> </Link>
                )
            }
        </MenuItem>)}
    </Menu>)
}


export default function CNavbar({ locationMap } : INavbarProps) {

    const locations = locationMap ? Object.keys(locationMap) : [];

    return (
        <Navbar>
            <NavbarGroup>
                <Link to="/">
                    <NavbarHeading >RENTAL MANAGEMENT SYSTEM</NavbarHeading>
                </Link>
            </NavbarGroup>
            <NavbarGroup align="right">
                <Popover content={<MENU locations={locations} locationMap={locationMap} />} position={Position.BOTTOM_LEFT}>
                    <Button text="Select Region" />
                </Popover>
            </NavbarGroup>
        </Navbar>
    )
}
