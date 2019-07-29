import { createSelector } from "reselect";

// we don't need this after data normalization
// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   women: 4,
//   men: 5,
// };

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections,
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : [],
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    // collections =>
    //   collections.find(
    //     collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam],
    //   ),

    // after data normalization
    collections => (collections ? collections[collectionUrlParam] : null),
  );

export const selectIsCollectionsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching,
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !shop.collections,
);
