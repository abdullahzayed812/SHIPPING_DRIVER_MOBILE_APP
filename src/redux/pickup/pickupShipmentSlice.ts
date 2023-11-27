import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PICKUP_SHIPMENT_URL_END_POINT } from '../../constants/urls';
import { getData } from '../../helpers/api';
import { AppDispatch } from '../store';
import { Data } from './pickupListSlice';

interface PickupShipmentState {
  loading: boolean;
  signatureResult: string;
  pickupShipment: [];
}

const initialState: PickupShipmentState = {
  loading: false,
  signatureResult: '',
  pickupShipment: [],
};

const pickupShipmentSlice = createSlice({
  name: 'pickupShipment',
  initialState,
  reducers: {
    pickupShipmentRequest: state => {
      state.loading = true;
    },
    pickupShipmentSuccess: (state, action: PayloadAction<[]>) => {
      state.loading = false;
      state.pickupShipment = action.payload;
    },
    pickupShipmentFailure: state => {
      state.loading = false;
    },
  },
});

export const {
  pickupShipmentRequest,
  pickupShipmentSuccess,
  pickupShipmentFailure,
} = pickupShipmentSlice.actions;

export async function getPickupShipment(
  dispatch: AppDispatch,
  data: Data,
  id: number,
) {
  dispatch(pickupShipmentRequest());
  try {
    const response = await getData(PICKUP_SHIPMENT_URL_END_POINT, id, data);
    dispatch(pickupShipmentSuccess(response?.data?.data));
    return response;
  } catch (error) {
    dispatch(pickupShipmentFailure);
    console.log(error);
  }
}

export default pickupShipmentSlice.reducer;
