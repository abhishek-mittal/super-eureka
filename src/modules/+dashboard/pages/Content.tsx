import { IBreadcrumbProps } from '@blueprintjs/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TCatalogCategory } from 'shared/pseudo-api';
import { RootState } from '../../../store';
import { ContentCurrentPositionIS } from '../@constants/module';
import { IContentCurrentPositionIS, IContentParams } from '../@types';
import ContentRenderer from '../components/contentRenderer';
import SystemUI from './../../+core/ui';
import './content.scss';

const { Internal, Blueprint } = SystemUI;

export default function Content() {

    const loading = useSelector((state: RootState) => state.session.dashboardSession.isFetching);
    const [currentPosition, setCurrentPosition] = React.useState(ContentCurrentPositionIS);

    const { branch }: IContentParams = useParams();
    const { branchMap } = useSelector((state: RootState) => state.session.dashboardSession)

    if (!branchMap) {
        return <>'No Data Availaible'</>;
    }

    if (!branch && !(branch in branchMap)) {
        return null;
    }

    const categories = branchMap[branch].categories;
    const BREADCRUMBS: IBreadcrumbProps[] = [
        { onClick: () => handleClick(), icon: "folder-close", text: 'Equipment Catalog' },
        { icon: "folder-close", text: currentPosition.cat }
    ];

    const handleClick = (category?: string, cat?: TCatalogCategory) => {

        const currentPos: IContentCurrentPositionIS = category ? {
            active: true,
            cat: category,
            data: cat ? cat.subcategories : [] 
        } : ContentCurrentPositionIS
        setCurrentPosition(currentPos);

    }


    return (

        <section>

            {currentPosition.active && 
                <Internal.Padded>
                    <Blueprint.Breadcrumb breadcrumbs={BREADCRUMBS} />
                </Internal.Padded>
            }

            <div className="context-container">
                {
                    currentPosition.active ? 
                    <ContentRenderer data={currentPosition.data} loading={loading} imageDir="statics/images/subcategory/" /> :
                    <ContentRenderer data={categories} loading={loading} onClick={(category: string, cat: TCatalogCategory) => handleClick(category,cat)} imageDir="statics/images/" />
                }
            </div>
        </section>

    )
}
