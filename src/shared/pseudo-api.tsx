import * as Catalog from './../statics/data/catalog.json';

export type TCatalog = typeof Catalog.data;
export type TCatalogLocations = typeof Catalog.data.locations;
export type TCatalogBranch = typeof Catalog.data.locations[0]['branches'][0];
export type TCatalogBranches = typeof Catalog.data.locations[0]['branches'];
export type TCatalogCategories = TCatalogBranch['categories'];
export type TCatalogCategory =  TCatalogCategories[number];
export type TCatalogSubCategories = typeof Catalog.data.locations[0]['branches'][0]['categories'][0]['subcategories'];
export type TCatalogSubCategory = TCatalogSubCategories[number];
export type TLocationMap = { [key: string]: Partial< { branches: string[], dealers_id: string, opco: string }> };
export type TBranchMap = { [key: string]: TCatalogBranch };

export const getAllCatalog = () : Promise<TCatalog> => {
    return Promise.resolve(Catalog.data);
}