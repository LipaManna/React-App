import { configureStore } from "@reduxjs/toolkit";
import avatarReducer from './avatarslice'

export const store = configureStore({
    reducer: {
        avatar: avatarReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;