import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SHIPMENT_DETAILS_URL_END_POINT } from '../../constants/urls';
import { getData } from '../../helpers/api';
import { AppDispatch } from '../store';

interface PayloadObjectType {
  receiver_name: string;
  receiver_address: string;
  receiver_id: number | string;
  receiver_phone: string;
  sender_phone: string;
  sender_address: string;
  created_at: { date: string };
  payment_mode: string;
  total_cod_amount: number | string;
  substatus_id: string;
  status: string;
  account_number: number | string;
}

interface ShipmentDetailsState {
  loading: boolean;
  shipmentDetails: PayloadObjectType;
}

const initialState: ShipmentDetailsState = {
  loading: false,
  shipmentDetails: {
    receiver_address: '',
    receiver_id: '',
    receiver_name: '',
    receiver_phone: '',
    sender_phone: '',
    sender_address: '',
    created_at: { date: '' },
    payment_mode: '',
    total_cod_amount: 0,
    substatus_id: '',
    status: '',
    account_number: '',
  },
};

const shipmentDetailsSlice = createSlice({
  name: 'shipmentDetails',
  initialState,
  reducers: {
    shipmentDetailsRequest: state => {
      state.loading = true;
    },
    shipmentDetailsSuccess: (
      state,
      action: PayloadAction<PayloadObjectType>,
    ) => {
      state.loading = false;
      state.shipmentDetails = action.payload;
    },
    shipmentDetailsFailure: state => {
      state.loading = false;
    },
  },
});

export const {
  shipmentDetailsRequest,
  shipmentDetailsSuccess,
  shipmentDetailsFailure,
} = shipmentDetailsSlice.actions;

export async function getShipmentDetails(dispatch: AppDispatch, id: number) {
  dispatch(shipmentDetailsRequest());
  try {
    const response = await getData(SHIPMENT_DETAILS_URL_END_POINT, id);
    dispatch(shipmentDetailsSuccess(response?.data?.data));
    return response;
  } catch (error) {
    dispatch(shipmentDetailsFailure);
    console.log(error);
  }
}

export default shipmentDetailsSlice.reducer;
