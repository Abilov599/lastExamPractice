import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: undefined,
  error: undefined,
};

export const fetchData = createAsyncThunk("fetchData", async () => {
  const res = await axios("http://localhost:3000/teachers");
  return res.data;
});

export const postData = createAsyncThunk("postData", async (value) => {
  await axios.post("http://localhost:3000/teachers", value);
});

export const fetchDataById = createAsyncThunk("fetchDataById", async (id) => {
  const res = await axios(`http://localhost:3000/teachers/${id}`);
  return res.data;
});

export const deleteData = createAsyncThunk("deleteData", async (id) => {
  await axios.delete(`http://localhost:3000/teachers/${id}`);
});

const getData = createSlice({
  name: "getData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default getData.reducer;
