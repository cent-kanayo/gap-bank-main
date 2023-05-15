import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.gapfinance.ng';

const getUserFromStorage = () => {
  const user = localStorage.getItem('user');
  const result = user ? JSON.parse(user) : {};
  return result;
};
const getTokenFromStorage = () => {
  const token = localStorage.getItem('gapToken');
  const result = token ? token : {};
  return result;
};

const initialState = {
  loading: false,
  error: false,
  errorMsg: '',
  confirmPass: false,
  isActivated: false,
  isAuthorized: false,
  success: false,
  isLoggedIn: false,
  user: getUserFromStorage(),
  token: getTokenFromStorage(),
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, user, {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.message);
    }
  }
);

export const activate = createAsyncThunk(
  'auth/activate',
  async (details, thunkAPI) => {
    try {
      const response = await axios.post(
        `${baseUrl}/auth/activate-account`,
        details
      );
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.message);
    }
  }
);
export const authorize = createAsyncThunk(
  'auth/authorize',
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
  'auth/loginUser',
  async (details, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, details, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
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
  'auth/setPassword',
  async (details, thunkAPI) => {
    try {
      const response = await axios.post(
        `${baseUrl}/auth/set-password`,
        details,
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.response.message);
    }
  }
);

export const getAuthUser = createAsyncThunk(
  'auth/getAuthUser',
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
  'auth/checkToken',
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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.user = payload;
      localStorage.setItem('user', JSON.stringify(payload));
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = true;
      state.error = true;
      state.success = false;
      state.errorMsg = payload;
    },
    [activate.pending]: (state) => {
      state.loading = true;
    },
    [activate.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isActivated = true;
    },
    [activate.rejected]: (state, { payload }) => {
      state.loading = true;
      state.error = true;
      state.success = false;
      state.errorMsg = payload;
    },
    [authorize.pending]: (state) => {
      state.loading = true;
    },
    [authorize.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isAuthorized = true;
      state.user = payload;
    },
    [authorize.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errorMsg = payload?.message;
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = payload;
      localStorage.setItem('user', JSON.stringify(payload));
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errorMsg = payload?.message;
    },
    [setPassword.pending]: (state) => {
      state.loading = true;
    },
    [setPassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.confirmPass = true;
      state.token = localStorage.setItem('gapToken', payload.token);
    },
    [setPassword.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errorMsg = payload;
    },
  },
});

export default authSlice.reducer;
