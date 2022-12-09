import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import counterReducer from './features/counter/counterSlice'
import studentReducer from './features/student/StudentSlice'
import parentReducer from './features/parent/ParentSlice'

export function makeStore() {
  return configureStore({
    reducer: { counter: counterReducer, student: studentReducer, parent: parentReducer },
    devTools: true
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
