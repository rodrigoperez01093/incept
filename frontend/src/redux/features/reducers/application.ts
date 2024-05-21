import { createReducer } from '@reduxjs/toolkit'
import { resetApplicationReducer, setClients, setInboundCase } from '../actions/application'
import { Application } from '../../../interfaces/application/interface'

const initialState: Application = {
  clients: [],
  inboundCase: {}
}

export const applicationReducer = createReducer(initialState, builder => {
  builder
    .addCase(resetApplicationReducer, (state, action) => {
      return initialState
    })
    .addCase(setClients, (state, action) => {
      state.clients = action.payload
    })
    .addCase(setInboundCase, (state, action) => {
      state.inboundCase = action.payload
    })
})