import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PICKUP_HISTORY_URL_END_POINT } from '../../constants/urls';
import { getData } from '../../helpers/api';
import { AppDispatch } from '../store';
import type { Data } from './pickupListSlice';

interface PickupHistoryState {
  pickupHistoryLoading: boolean;
  pickupHistory: [];
}

const initialState: PickupHistoryState = {
  pickupHistoryLoading: false,
  pickupHistory: [],
};

const pickupHistorySlice = createSlice({
  name: 'pickupHistory',
  initialState,
  reducers: {
    pickupHistoryRequest: state => {
      state.pickupHistoryLoading = true;
    },
    pickupHistorySuccess: (state, action: PayloadAction<[]>) => {
      state.pickupHistoryLoading = false;
      state.pickupHistory = action.payload;
    },
    pickupHistoryFailure: state => {
      state.pickupHistoryLoading = false;
    },
  },
});

export const {
  pickupHistoryRequest,
  pickupHistorySuccess,
  pickupHistoryFailure,
} = pickupHistorySlice.actions;

export async function getPickupHistory(
  dispatch: AppDispatch,
  data: Data,
  id?: number,
) {
  dispatch(pickupHistoryRequest());
  try {
    const response = await getData(PICKUP_HISTORY_URL_END_POINT, id, data);
    dispatch(pickupHistorySuccess(response?.data?.data));
    return response;
  } catch (error) {
    dispatch(pickupHistoryFailure);
    console.log(error);
  }
}

export default pickupHistorySlice.reducer;
