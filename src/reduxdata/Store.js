import { configureStore } from "@reduxjs/toolkit";
import RegisterReducer from '../reduxdata/RegisterSlice'

const store = configureStore({
    reducer : {
        regdata : RegisterReducer
    }
})

export default store;