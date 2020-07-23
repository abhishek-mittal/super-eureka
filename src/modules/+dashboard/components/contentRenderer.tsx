import { Card, Classes, Elevation } from '@blueprintjs/core';
import SystemUI from 'modules/+core/ui';
import React from 'react';
import { IContentContentRendererProps } from '../@types';
const { Internal } = SystemUI;

export default function ContentRenderer(props: IContentContentRendererProps) {
    if (!props.data.length) return null;
    return <>
        {props.data.map((cat, index: number) => {
            return <Card key={`__mslkcskldc__${index}`} interactive={true} elevation={Elevation.FOUR} >
                <div className={props.loading ? Classes.SKELETON : ''}>
                    <Internal.Image src={`${props.imageDir}${cat.image}`} width="220" />
                </div>
                { props.onClick ? <h5 onClick={() => props.onClick(cat.name, cat)} className={props.loading ? Classes.SKELETON : ''}>{cat.name}</h5> :
                <h5 className={props.loading ? Classes.SKELETON : ''}>{cat.name}</h5>}
            </Card>
        })}
    </>
}

