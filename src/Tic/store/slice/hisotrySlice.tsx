import {createSlice} from "@reduxjs/toolkit"

interface HistoryState{
    history: number[]
}
const historySlice = createSlice({
    name: "history",
    initialState: {
        history :[]
    } as HistoryState,
    reducers: {
        addHistory(state, action:{payload: number}) {
            state.history.push(action.payload)
        },
        resetHistory(state, action:{payload: number[]}) {
            state.history = action.payload 
        }
    }
})

export const { addHistory, resetHistory } = historySlice.actions;
export default historySlice.reducer;