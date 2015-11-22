import { CHANGE_FIELD } from '../actions/counter'

const initialState = {}

export default function form(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.field]: action.value
      }
    default:
      return state
  }
}
