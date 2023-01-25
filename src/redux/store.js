import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slices/auth.slice"
import vodSlice from "./slices/vod.slice"
import uiSlice from "./slices/ui.slice"

export const store = configureStore({
    reducer: {
        auth: authSlice,
        vod: vodSlice,
        ui: uiSlice,
    }
})