import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import AppComponent from "../components/app";

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
