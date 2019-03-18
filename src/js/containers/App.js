import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions'
import App from '../App';
import { getProducts } from '../selectors';

const mapStateToProps = state => ({
  ...state,
  catalog: {
    ...state.catalog,
    products: getProducts(state)
  }
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
