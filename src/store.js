import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import {progressStepSlice, userSlice} from './slices';
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: {
        navUsers: userSlice,
        navProgressComponent: progressStepSlice,
    }
}, applyMiddleware(thunk))