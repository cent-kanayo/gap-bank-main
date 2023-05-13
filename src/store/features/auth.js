import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://16.16.103.106';

const initialState = {
  loading: false,
  error: false,
  errorMsg: '',
  user: {},
  success: false,
};

export const registerUser = createAsyncThunk(
  'account/registerUser',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, user, {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.message);
    }
  }
);
export const confirmEmail = createAsyncThunk(
  'account/confirmEmail',
  async (details, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/authorize`, details);
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.message);
    }
  }
);
export const authorize = createAsyncThunk(
  'account/authorize',
  async (details, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/authorize`, details);
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  'account/loginUser',
  async (details, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, details, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'account/forgotPassword',
  async (details, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, details, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.message);
    }
  }
);

export const setPassword = createAsyncThunk(
  'account/setPassword',
  async (details, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, details, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.message);
    }
  }
);

export const getAuthUser = createAsyncThunk(
  'account/getAuthUser',
  async (details, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/auth/user`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${thunkAPI.getState()}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.message);
    }
  }
);
export const checkToken = createAsyncThunk(
  'account/checkToken',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/auth/check-token/${token}`);
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.message);
    }
  }
);

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.account = payload;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = true;
      state.error = true;
      state.success = false;
      state.errorMsg = payload;
    },
    [confirmEmail.pending]: (state) => {
      state.loading = true;
    },
    [confirmEmail.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.user = payload;
    },
    [confirmEmail.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errorMsg = payload;
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.user = payload;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errorMsg = payload;
    },
  },
});

export default accountSlice.reducer;