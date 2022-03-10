import { configureStore } from '@reduxjs/toolkit'
import { candidateSlice } from './formSlice'

export const store = configureStore({
  reducer: {
      candidate:candidateSlice.reducer
  },
})