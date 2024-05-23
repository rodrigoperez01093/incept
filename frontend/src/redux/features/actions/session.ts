import { createAction } from '@reduxjs/toolkit'
import { User } from '../../../interfaces/general'

export const resetSessionReducer = createAction<void>('login/resetSessionReducer')
export const setSession = createAction<boolean>('login/setSession')
export const setUser = createAction<User>('login/setUser')