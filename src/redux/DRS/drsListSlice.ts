import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DRS_LIST_URL_END_POINT } from '../../constants/urls';
import { getData } from '../../helpers/api';
import { Data } from '../pickup/pickupListSlice';
import { AppDispatch } from '../store';

interface DRSListState {
  DRSListLoading: boolean;
  drsList: [];
}

const initialState: DRSListState = {
  DRSListLoading: false,
  drsList: [],
};

const drsListSlice = createSlice({
  name: 'drsList',
  initialState,
  reducers: {
    drsListRequest: state => {
      state.DRSListLoading = true;
    },
    drsListSuccess: (state, action: PayloadAction<[]>) => {
      state.DRSListLoading = false;
      state.drsList = action.payload;
    },
    drsListFailure: state => {
      state.DRSListLoading = false;
    },
  },
});

export const { drsListRequest, drsListSuccess, drsListFailure } =
  drsListSlice.actions;

export async function getDRSList(
  dispatch: AppDispatch,
  data: Data,
  id?: number,
) {
  dispatch(drsListRequest());
  try {
    const response = await getData(DRS_LIST_URL_END_POINT, id, data);
    dispatch(drsListSuccess(response?.data?.data));
    return response;
  } catch (error) {
    dispatch(drsListFailure);
    console.log(error);
  }
}

export default drsListSlice.reducer;
