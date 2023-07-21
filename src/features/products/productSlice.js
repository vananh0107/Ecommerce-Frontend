import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { productService } from './productService';
export const getAllProducts = createAsyncThunk(
  'product/get',
  async (data, thunkAPI) => {
    try {
      return await productService.getProduct(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAProduct = createAsyncThunk(
  'product/getSingle',
  async (id, thunkAPI) => {
    try {
      return await productService.getSingleProduct(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addToWishlist = createAsyncThunk(
  'product/wishList',
  async (prodId, thunkAPI) => {
    try {
      return await productService.addToWishList(prodId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addRating = createAsyncThunk(
  'product/rating',
  async (data, thunkAPI) => {
    try {
      return await productService.rateProduct(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getCategoryProduct = createAsyncThunk(
  'product/category',
  async (thunkAPI) => {
    try {
      return await productService.getCaProduct();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getTotalProductCat = createAsyncThunk(
  'product/category-total',
  async (thunkAPI) => {
    try {
      return await productService.getCountQuantityCat();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAllColor = createAsyncThunk(
  'product/color-list',
  async (thunkAPI) => {
    try {
      return await productService.getAllColor();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAllBrand = createAsyncThunk(
  'product/brand-list',
  async (thunkAPI) => {
    try {
      return await productService.getAllBrand();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const productState = {
  product: '',
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};
export const productSlice = createSlice({
  name: 'product',
  initialState: productState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
        state.message = action.error;
      })
      .addCase(addToWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addToWishlist = action.payload;
        state.message = 'Product added to Wishlist';
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleProduct = action.payload;
        state.message = 'Product fetched succesfully';
      })
      .addCase(getAProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(addRating.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addRating.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.rating = action.payload;
        if (state.isSuccess) toast.success('Rating added successfully');
      })
      .addCase(addRating.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getCategoryProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategoryProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.categoryProduct = action.payload;
      })
      .addCase(getCategoryProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getTotalProductCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTotalProductCat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.categoryProductTotal = action.payload;
      })
      .addCase(getTotalProductCat.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAllColor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllColor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.colorList = action.payload;
      })
      .addCase(getAllColor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAllBrand.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.brandList = action.payload;
      })
      .addCase(getAllBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});
export default productSlice.reducer;
