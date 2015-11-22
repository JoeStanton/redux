import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RegistrationForm from '../components/RegistrationForm'
import * as CounterActions from '../actions/counter'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(state => state.form, mapDispatchToProps)(RegistrationForm)
