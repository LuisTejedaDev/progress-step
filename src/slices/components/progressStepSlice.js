import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    step: 1,
    enabled: true,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setNextStep: (state, action) => {state.step = state.step + 1},
        setEnabled: (state, action) => {state.enabled = action.payload},
    }
})

export const {setNextStep, setEnabled} = navSlice.actions

export const selectStep = (state) => state.navProgressComponent.step;
export const selectEnabled = (state) => state.navProgressComponent.enabled;

export default navSlice.reducer