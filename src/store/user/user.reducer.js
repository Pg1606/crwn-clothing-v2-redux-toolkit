import { createSlice } from '@reduxjs/toolkit';

//import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  test: {a: 1},
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) { //shorthand for setCurrentUser: () => {}
      state.currentUser = action.payload; //similar to the case statement below
    },
  },
})//here redux toolkit is handling the user types so we don't need to specify them like before

// export const userReducerOld = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };
//     default:
//       return state;
//   }
// };
export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;