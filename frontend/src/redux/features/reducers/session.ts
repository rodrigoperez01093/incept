import { createReducer } from '@reduxjs/toolkit'
import { resetSessionReducer, setUser, setSession } from '../actions/session'
import { Session } from '../../../interfaces/session/interface'

const initialState: Session = {
  logged: false,
  user: {
    data: '',
    token: '',
  }
}

export const sessionReducer = createReducer(initialState, builder => {
  builder
    .addCase(resetSessionReducer, (state, action) => { // assays state reset
      return initialState
    })
    .addCase(setSession, (state, action) => {
      state.logged = action.payload
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload
    })
})