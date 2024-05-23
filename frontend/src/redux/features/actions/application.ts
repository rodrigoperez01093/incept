import { createAction } from '@reduxjs/toolkit'
import { ClientsState, InboundState } from '../../../interfaces/application/interface'

export const resetApplicationReducer = createAction<void>('/resetApplicationReducer')
export const setClients = createAction<ClientsState[]>('/setClients')
export const setInboundCase = createAction<InboundState>('/setInboundCase')