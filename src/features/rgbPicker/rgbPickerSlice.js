import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rValue: 0,
  gValue: 0,
  bValue: 0
}

export const rgbPickerSlice = createSlice({
  name: 'rgbPicker',
  initialState,
  reducers: {
    setRgbValue: (state, action) => {
      switch (action.payload.color) {
        case "R":
          state.rValue = action.payload.value;
          break;
        case "G":
          state.gValue = action.payload.value;
          break;
        case "B":
          state.bValue = action.payload.value;
          break;
        default:
      }
    },
    setGvalue: (state, action) => {
      state.gValue = action.payload;
    },
    setBvalue: (state, action) => {
      state.bValue = action.payload;
    },
    incrementR: (state) => {
      state.rValue += 1
    },
    decrementR: (state) => {
      state.rValue -= 1
    },
  },
})

export const { incrementR, decrementR, setRgbValue } = rgbPickerSlice.actions

export default rgbPickerSlice.reducer