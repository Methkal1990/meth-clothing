import React from "react";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        {/* <Route exact path={`${match.path}`} component={CollectionsOverview} /> */}
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
          // render={props => (
          //   <CollectionsOverviewWithSpinner
          //     isLoading={isCollectionaFetching}
          //     {...props}
          //   />
          // )}
        />
        {/* <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        /> */}
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
          // render={props => (
          //   <CollectionPageWithSpinner
          //     isLoading={!IsCollectionLoaded}
          //     {...props}
          //   />
          // )}
        />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(
  null,
  mapDispatchToProps,
)(ShopPage);
