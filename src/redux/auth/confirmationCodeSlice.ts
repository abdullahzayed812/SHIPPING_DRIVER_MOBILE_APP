import { createSlice } from '@reduxjs/toolkit';
import { CONRIMATION_CODE_URL_END_POINT } from '../../constants/urls';
import { postData } from '../../helpers/api';
import { AppDispatch } from '../store';

interface ConfirmationCodeState {
  loading: boolean;
}

const initialState: ConfirmationCodeState = {
  loading: false,
};

const confirmationCodeSlice = createSlice({
  name: 'confirmationCode',
  initialState,
  reducers: {
    confirmationCodeRequest: state => {
      state.loading = true;
    },
    confirmationCodeSuccess: state => {
      state.loading = false;
    },
    confirmationCodeFailure: state => {
      state.loading = false;
    },
  },
});

export const {
  confirmationCodeRequest,
  confirmationCodeSuccess,
  confirmationCodeFailure,
} = confirmationCodeSlice.actions;

export async function confirmCode(
  dispatch: AppDispatch,
  data: { confirmation_code: number | undefined },
) {
  dispatch(confirmationCodeRequest());
  try {
    const response = await postData(CONRIMATION_CODE_URL_END_POINT, data);
    dispatch(confirmationCodeSuccess());
    return response;
  } catch (error) {
    dispatch(confirmationCodeFailure);
    console.log(error);
  }
}

export default confirmationCodeSlice.reducer;
