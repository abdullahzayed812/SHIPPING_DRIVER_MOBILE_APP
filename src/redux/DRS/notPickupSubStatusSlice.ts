import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NOT_PICKUP_SUB_STATUS } from '../../constants/urls';
import { getData } from '../../helpers/api';
import { AppDispatch } from '../store';

interface NotPickupSubStatus {
  loading: boolean;
  notPickupSubStatus: [];
}

const initialState: NotPickupSubStatus = {
  loading: false,
  notPickupSubStatus: [],
};

const notPickupSubStatusSlice = createSlice({
  name: 'notPickupSubStatus',
  initialState,
  reducers: {
    notPickupSubStatusRequest: state => {
      state.loading = true;
    },
    notPickupSubStatusSuccess: (state, action: PayloadAction<[]>) => {
      state.loading = false;
      state.notPickupSubStatus = action.payload;
    },
    notPickupSubStatusFailure: state => {
      state.loading = false;
    },
  },
});

export const {
  notPickupSubStatusRequest,
  notPickupSubStatusSuccess,
  notPickupSubStatusFailure,
} = notPickupSubStatusSlice.actions;

export async function getNotPickupSubStatus(
  dispatch: AppDispatch,
  id: number,
  data: { id: number },
) {
  dispatch(notPickupSubStatusRequest());
  try {
    const response = await getData(NOT_PICKUP_SUB_STATUS, id, data);
    dispatch(notPickupSubStatusSuccess(response?.data?.data));
    return response;
  } catch (error) {
    dispatch(notPickupSubStatusFailure);
    console.log(error);
  }
}

export default notPickupSubStatusSlice.reducer;
