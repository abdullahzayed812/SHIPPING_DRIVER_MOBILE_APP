import { createSlice } from '@reduxjs/toolkit';
import { FORGOT_PASSWORD_URL_END_POINT } from '../../constants/urls';
import { postData } from '../../helpers/api';
import { AppDispatch } from '../store';

interface ForgotPasswordState {
  loading: boolean;
}

const initialState: ForgotPasswordState = {
  loading: false,
};

const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
    forgotPasswordRequest: state => {
      state.loading = true;
    },
    forgotPasswordSuccess: state => {
      state.loading = false;
    },
    forgotPasswordFailure: state => {
      state.loading = false;
    },
  },
});

export const {
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailure,
} = forgotPasswordSlice.actions;

export async function forgotPassword(
  dispatch: AppDispatch,
  data: { phone: string },
) {
  dispatch(forgotPasswordRequest());
  try {
    const response = await postData(FORGOT_PASSWORD_URL_END_POINT, data);
    dispatch(forgotPasswordSuccess());
    return response;
  } catch (error) {
    dispatch(forgotPasswordFailure());
    console.log(error);
  }
}

export default forgotPasswordSlice.reducer;
