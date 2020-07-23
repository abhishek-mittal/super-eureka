import { TCatalogSubCategories, TLocationMap } from "shared/pseudo-api";

export interface INavbarProps { locationMap?: TLocationMap };
export interface INavbarMenuProps { locations: string[], locationMap: TLocationMap };

export interface IContentContentRendererProps { data: { name: string, image?: string }[], loading: boolean, onClick?: any, imageDir: string };
export interface IContentParams { location: string, branch: string };

export interface IContentCurrentPositionIS {
    cat: string,
    data: TCatalogSubCategories | never[],
    active: boolean
};

