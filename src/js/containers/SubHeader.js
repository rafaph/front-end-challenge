import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions'
import SubHeader from '../layout/SubHeader';
import { getProducts } from '../selectors';

const mapStateToProps = state => ({
  products: getProducts(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubHeader);
