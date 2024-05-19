import { createAction } from '@reduxjs/toolkit'

export const resetSessionReducer: any = createAction('login/resetSessionReducer')
export const setSession: any = createAction('login/setSession')
export const setUser: any = createAction('login/setUser')