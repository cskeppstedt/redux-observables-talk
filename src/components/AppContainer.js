import {connect} from 'react-redux';
import {foo} from '../store/app';
import App from './App';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  foo: () => dispatch(foo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
