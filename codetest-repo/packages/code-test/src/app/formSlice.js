import { createSlice } from "@reduxjs/toolkit";

export const candidateSlice = createSlice({
    name:"candidate",
    initialState:{
        candidate:{}
    },
    reducers:{
        submit:(state,action) => {
            state.candidate = action.payload
        }
    }
})

export const {submit} = candidateSlice.actions

export const selectCandidate = (state) => state.candidate.candidate
export default candidateSlice.reducer