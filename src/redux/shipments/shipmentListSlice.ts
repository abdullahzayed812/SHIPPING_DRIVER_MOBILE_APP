import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SHIPMENT_LIST_URL_END_POINT } from '../../constants/urls';
import { getData } from '../../helpers/api';
import { AppDispatch } from '../store';

interface ShipmentListState {
  loading: boolean;
  shipmentList: [];
}

interface Data {
  per_page: number;
  page: number;
  awb?: string;
  receiver_phone?: string;
}

const initialState: ShipmentListState = {
  loading: false,
  shipmentList: [],
};

const shipmentListSlice = createSlice({
  name: 'shipmentList',
  initialState,
  reducers: {
    shipmentListRequest: state => {
      state.loading = true;
    },
    shipmentListSuccess: (state, action: PayloadAction<[]>) => {
      state.loading = false;
      state.shipmentList = action.payload;
    },
    shipmentListFailure: state => {
      state.loading = false;
    },
  },
});

export const { shipmentListRequest, shipmentListSuccess, shipmentListFailure } =
  shipmentListSlice.actions;

export async function getShipmentList(
  dispatch: AppDispatch,
  id: number,
  data: Data,
) {
  dispatch(shipmentListRequest());
  try {
    const response = await getData(SHIPMENT_LIST_URL_END_POINT, id, data);
    dispatch(shipmentListSuccess(response?.data?.data));
    return response;
  } catch (error) {
    dispatch(shipmentListFailure);
    console.log(error);
  }
}

export default shipmentListSlice.reducer;
