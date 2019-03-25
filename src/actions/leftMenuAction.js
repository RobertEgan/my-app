import { LEFT_MENU_EXPANDED } from './types';

export const leftMenuAction = (value) => dispatch => {
  dispatch({
    type: LEFT_MENU_EXPANDED,
    payload: value
  });
};
