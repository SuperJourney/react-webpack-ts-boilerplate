import { configureStore } from '@reduxjs/toolkit'
import  historySlice  from './slice/hisotrySlice'
const store = configureStore({
    reducer: {
        historyReducer: historySlice
    },
})
export default store
