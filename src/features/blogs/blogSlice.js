import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { blogService } from './blogService';
export const getAllBlogs = createAsyncThunk(
  'blogs/get',
  async (data, thunkAPI) => {
    try {
      return await blogService.getBlogs(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getSingleBlog = createAsyncThunk(
  'blog/getSingle',
  async (id, thunkAPI) => {
    try {
      return await blogService.getBlog(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getCategoryBlog = createAsyncThunk(
  'blog/category',
  async (thunkAPI) => {
    try {
      return await blogService.getCategoryBlog();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const blogState = {
  blog: '',
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};
export const blogSlice = createSlice({
  name: 'blog',
  initialState: blogState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blog = action.payload;
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
        state.message = action.error;
      })
      .addCase(getSingleBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleblog = action.payload;
      })
      .addCase(getSingleBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
        state.message = action.error;
      })
      .addCase(getCategoryBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategoryBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.category = action.payload;
      })
      .addCase(getCategoryBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
        state.message = action.error;
      });
  },
});
export default blogSlice.reducer;
