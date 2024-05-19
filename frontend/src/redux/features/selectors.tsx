import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export const session = (state: RootState): any => state.session

export const sessionSelector = createSelector(session, state => state)