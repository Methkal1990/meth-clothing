import React from "react";
import "./collections-overview.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// after data normalization
// import {selectShopCollections} from '../../redux/shop/shop.selectors'
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import PreviewCollection from "../preview-collection/preview-collection.component";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  // collections: selectShopCollections,
  // after data normalization
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
