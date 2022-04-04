import { createSelector } from '@reduxjs/toolkit'

import { initialState } from '../reducers/ServiceReducer'

const selectDomain = (state) => state.users || initialState



export const selectUserDetails = createSelector(
  [selectDomain],
  (userState) => userState.userdata,
)
