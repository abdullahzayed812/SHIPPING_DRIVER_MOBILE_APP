import { createSlice } from '@reduxjs/toolkit';
import { LOGIN_URL_END_POINT } from '../../constants/urls';
import { postData } from '../../helpers/api';
import { UserStateProps } from '../../screens/Login';
import { AppDispatch } from '../store';

interface loginSliceState {
  loading: boolean;
  isLogin: boolean;
}

const initialState: loginSliceState = {
  loading: false,
  isLogin: false,
};

const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: state => {
      state.loading = true;
    },
    loginSuccess: state => {
      state.loading = false;
      state.isLogin = true;
    },
    loginFailure: state => {
      state.loading = false;
      state.isLogin = false;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = loginSlice.actions;

export async function login(dispatch: AppDispatch, userData: UserStateProps) {
  dispatch(loginRequest());
  try {
    const response = await postData(LOGIN_URL_END_POINT, userData);
    dispatch(loginSuccess());
    return response;
  } catch (error) {
    dispatch(loginFailure());
    console.log(error);
  }
}

export default loginSlice.reducer;
