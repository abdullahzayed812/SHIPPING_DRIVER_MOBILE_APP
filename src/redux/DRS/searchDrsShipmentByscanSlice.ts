import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SEARCH_BY_SCAN_SHIPMENT_URL_END_POINT } from '../../constants/urls';
import { getData } from '../../helpers/api';
import { AppDispatch } from '../store';

interface InitialState {
  loading: boolean;
  shipmentData: ShipmentData;
}

interface ScannedShipmentDRSReqData {
  driver_id: number;
  awb: string;
  drs_id: number;
}

interface ShipmentData {
  id: number;
  awb: string;
  total_cod_amount: 0;
  created_at: { date: string };
  receiver_phone: string;
  receiver_address: string;
  status: number;
  sender_lat: number;
  senderLng: number;
}

const initialState: InitialState = {
  loading: false,
  shipmentData: {
    id: 0,
    awb: '',
    total_cod_amount: 0,
    created_at: { date: '' },
    receiver_phone: '',
    receiver_address: '',
    status: 0,
    sender_lat: 0,
    senderLng: 0,
  },
};

const searchDrsShipmentByScanSlice = createSlice({
  name: 'searchDrsShipmentByScan',
  initialState,
  reducers: {
    searchDrsShipmentByScanSliceRequest: state => {
      state.loading = true;
    },
    searchDrsShipmentByScanSliceSuccess: (
      state,
      action: PayloadAction<any>,
    ) => {
      state.loading = false;
      state.shipmentData = action.payload;
    },
    searchDrsShipmentByScanSliceFailure: state => {
      state.loading = false;
    },
  },
});

export const {
  searchDrsShipmentByScanSliceRequest,
  searchDrsShipmentByScanSliceSuccess,
  searchDrsShipmentByScanSliceFailure,
} = searchDrsShipmentByScanSlice.actions;

export async function getScannedShipmentDRS(
  dispatch: AppDispatch,
  data: ScannedShipmentDRSReqData,
) {
  dispatch(searchDrsShipmentByScanSliceRequest());
  try {
    const response = await getData(
      SEARCH_BY_SCAN_SHIPMENT_URL_END_POINT,
      undefined,
      data,
    );
    dispatch(searchDrsShipmentByScanSliceSuccess(response?.data?.data));
    return response;
  } catch (error) {
    dispatch(searchDrsShipmentByScanSliceFailure());
    console.log(error);
  }
}

export default searchDrsShipmentByScanSlice.reducer;
