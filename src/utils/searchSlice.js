import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        showSearchPage: false

    }, 
    reducers: {
        TOGGLE_GPT_SEARCH : (state, action) => {
            state.showSearchPage = !state.showSearchPage
        }
    }
})

export const {TOGGLE_GPT_SEARCH} = searchSlice.actions
export default searchSlice.reducer