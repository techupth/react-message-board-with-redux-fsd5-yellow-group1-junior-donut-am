import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "../slices/messageBoardSlice"

// TODO: Start Create Store Here !
const store = configureStore({
    reducer: {
        input: inputSlice
    }
}
)

export default store