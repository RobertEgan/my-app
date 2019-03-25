import { LEFT_MENU_EXPANDED } from '../actions/types';

const initialState = {
  expanded: 'false'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LEFT_MENU_EXPANDED:
      return {
        ...state,
        expanded: action.payload
      }
    default:
      return state
  }
}
