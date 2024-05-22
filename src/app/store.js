import { configureStore } from '@reduxjs/toolkit'
import rgbPickerReducer from '../features/rgbPicker/rgbPickerSlice'

export const store = configureStore({
  reducer: {
    rgbPicker: rgbPickerReducer
  },
})