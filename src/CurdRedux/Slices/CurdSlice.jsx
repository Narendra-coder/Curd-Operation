import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Read Data
export const readData = createAsyncThunk("ReadData", async () => {
    let response = await fetch('http://localhost:3000/student-data');

    try {
        let data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
});

// Create Data
export const createData = createAsyncThunk("createData", async (data) => {
    let response = await fetch('http://localhost:3000/student-data', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    try {
        let data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
});

// Update Data
export const updateData = createAsyncThunk("updateData", async (data) => {
    let response = await fetch(`http://localhost:3000/student-data/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    try {
        let data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
});

// Delete Data
export const deleteData = createAsyncThunk("deleteData", async (data) => {
    let response = await fetch(`http://localhost:3000/student-data/${data.id}`, {
        method: "DELETE"
    });

    try {
        let data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
});

export const CurdSlice = createSlice({
    name: "CURD",

    initialState: {
        isLoading: false,
        data: [],
        search: [],
        error: null
    },

    reducers :{
        searchData: (state, action)=>{
            state.search = action.payload
        }
    },

    extraReducers: (builder) => {
        // Read Data
        builder.addCase(readData.pending, (state, action) => {
            state.isLoading = true
        }),
        builder.addCase(readData.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.data = action.payload;
        }),
        builder.addCase(readData.rejected, (state, action) => {
                state.isLoading = true,
                    state.error = action.payload;
        })

        // Create Data
        builder.addCase(createData.pending, (state, action) => {
            state.isLoading = true
        }),
        builder.addCase(createData.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.data.push(action.payload);
        }),
        builder.addCase(createData.rejected, (state, action) => {
                state.isLoading = true,
                    state.error = action.payload;
        })

        // Update Data
        builder.addCase(updateData.pending, (state, action) => {
            state.isLoading = true
        }),
        builder.addCase(updateData.fulfilled, (state, action) => {
            state.isLoading = false;
            const { id } = action.payload;
            state.data = state.data.map((value)=> value.id === id);
        }),
        builder.addCase(updateData.rejected, (state, action) => {
            state.isLoading = true,
            state.error = action.payload;
        })

        // Delete Data
        builder.addCase(deleteData.pending, (state, action) => {
            state.isLoading = true
        }),
        builder.addCase(deleteData.fulfilled, (state, action) => {
            state.isLoading = false;
            const { id } = action.payload;
            state.data = state.data.map((value)=> value.id === id);
        }),
        builder.addCase(deleteData.rejected, (state, action) => {
            state.isLoading = true,
            state.error = action.payload;
        })

    }
});

export default CurdSlice.reducer;
export const{searchData} = CurdSlice.actions;