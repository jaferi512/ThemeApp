// Action Types

export const CHANGE_THEME = 'CHANGE_THEME';

// Action Creators

export function change(theme) {
  console.log('comming in' + theme); 
  return {
    type: CHANGE_THEME,
    payload:!theme,
  };
}

//
const initialState = false;
// reducer
function themeReducer(state = initialState, action) {
  if(action.type==CHANGE_THEME){
    return action.payload
}
return state
}

export {themeReducer};
