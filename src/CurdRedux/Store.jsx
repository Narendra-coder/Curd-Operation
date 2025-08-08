import { configureStore } from "@reduxjs/toolkit";
import CurdSlice from "./Slices/CurdSlice";

const CurdStore = configureStore({
    reducer: {
        allCurd: CurdSlice
    }
});

export default CurdStore;