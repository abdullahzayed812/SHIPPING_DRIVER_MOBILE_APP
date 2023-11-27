import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  BRANCHES_URL_END_POINT,
  REGISTER_URL_END_POINT,
} from '../../constants/urls';
import { getData, postData } from '../../helpers/api';
import type { NewAccountData } from '../../screens/CreateNewAccount';
import { AppDispatch } from '../store';

interface RegisterSliceState {
  loading: boolean;
  branches: { value: number; label: string }[];
}

const initialState: RegisterSliceState = {
  loading: false,
  branches: [],
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerRequest: state => {
      state.loading = true;
    },
    registerSuccess: state => {
      state.loading = false;
    },
    registerFailure: state => {
      state.loading = false;
    },
    loadBranches: (
      state,
      action: PayloadAction<
        {
          value: number;
          label: string;
        }[]
      >,
    ) => {
      state.branches = action.payload;
    },
  },
});

export const {
  registerRequest,
  registerSuccess,
  registerFailure,
  loadBranches,
} = registerSlice.actions;

export async function register(dispatch: AppDispatch, data: NewAccountData) {
  dispatch(registerRequest());
  try {
    const response = await postData(REGISTER_URL_END_POINT, data);
    dispatch(registerSuccess());
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getBranches(dispatch: AppDispatch) {
  try {
    const response = await getData(BRANCHES_URL_END_POINT);
    const branches = response?.data?.data;
    dispatch(loadBranches(branches));
    return response;
  } catch (error) {
    dispatch(registerFailure);
    console.log(error);
  }
}

export default registerSlice.reducer;
