import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DRS_HISTORY_URL_END_POINT } from '../../constants/urls';
import { getData } from '../../helpers/api';
import { Data } from '../pickup/pickupListSlice';
import { AppDispatch } from '../store';

interface DRSHistoryState {
  DRSHistoryLoading: boolean;
  drsHistory: [];
}

const initialState: DRSHistoryState = {
  DRSHistoryLoading: false,
  drsHistory: [],
};

const drsHistorySlice = createSlice({
  name: 'drsHisotry',
  initialState,
  reducers: {
    drsHistoryRequest: state => {
      state.DRSHistoryLoading = true;
    },
    drsHistorySuccess: (state, action: PayloadAction<[]>) => {
      state.DRSHistoryLoading = false;
      state.drsHistory = action.payload;
    },
    drsHistoryFailure: state => {
      state.DRSHistoryLoading = false;
    },
  },
});

export const { drsHistoryRequest, drsHistorySuccess, drsHistoryFailure } =
  drsHistorySlice.actions;

export async function getDRSHistory(
  dispatch: AppDispatch,
  data: Data,
  id?: number,
) {
  dispatch(drsHistoryRequest());
  try {
    const response = await getData(DRS_HISTORY_URL_END_POINT, id, data);
    dispatch(drsHistorySuccess(response?.data?.data));
    return response;
  } catch (error) {
    dispatch(drsHistoryFailure);
    console.log(error);
  }
}

export default drsHistorySlice.reducer;
