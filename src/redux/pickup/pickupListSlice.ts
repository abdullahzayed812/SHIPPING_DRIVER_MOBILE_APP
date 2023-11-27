import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PICKUP_LIST_URL_END_POINT } from '../../constants/urls';
import { getData } from '../../helpers/api';
import { AppDispatch } from '../store';

interface PickupState {
  pickupListLoading: boolean;
  pickupList: [];
}

const initialState: PickupState = {
  pickupListLoading: false,
  pickupList: [],
};

const PickupSlice = createSlice({
  name: 'PickupList',
  initialState,
  reducers: {
    pickupListRequest: state => {
      state.pickupListLoading = true;
    },
    pickupListSuccess: (state, action: PayloadAction<[]>) => {
      state.pickupListLoading = false;
      state.pickupList = action.payload;
    },
    pickupListFailure: state => {
      state.pickupListLoading = false;
    },
  },
});

export const { pickupListRequest, pickupListSuccess, pickupListFailure } =
  PickupSlice.actions;

export interface Data {
  page: string;
  per_page: string;
  barcode?: string;
  id?: number;
  awb?: string;
  receiver_phone?: string;
}

export async function getPickupList(
  dispatch: AppDispatch,
  data: Data,
  id?: number,
) {
  dispatch(pickupListRequest());
  try {
    const response = await getData(PICKUP_LIST_URL_END_POINT, id, data);
    dispatch(pickupListSuccess(response?.data?.data));
    return response;
  } catch (error) {
    dispatch(pickupListFailure);
    console.log(error);
  }
}

export default PickupSlice.reducer;
