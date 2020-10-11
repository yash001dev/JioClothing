import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {selectIsCollectionsFetching} from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.components';

const mapStateToProps=createStructuredSelector({
    isLoading:selectIsCollectionsFetching
});

const CollectionsOverviewContainer=compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);



export default CollectionsOverviewContainer;
