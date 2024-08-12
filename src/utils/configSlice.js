import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        lang: 'en'
    },
    reducers: {
        CHANGE_LANGUAGE: (state, action) => {
            state.lang = action.payload
        } 
    }
})

export const { CHANGE_LANGUAGE } = configSlice.actions
export default configSlice.reducer