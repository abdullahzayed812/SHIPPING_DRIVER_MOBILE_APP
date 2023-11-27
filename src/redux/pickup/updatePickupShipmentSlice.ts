import { createSlice } from '@reduxjs/toolkit';
import { UPDATE_PICKUP_SHIPMENT_URL_END_POINT } from '../../constants/urls';
import { postData } from '../../helpers/api';
import { UpdatePickupShipmentReqData } from '../../screens/ScanAndPickup';
import { AppDispatch } from '../store';

interface InitialState {
  loading: boolean;
}

const initialState: InitialState = {
  loading: false,
};

const updatePickupShipmentSlice = createSlice({
  name: 'updatePickupShipment',
  initialState,
  reducers: {
    updatePickupShipmentRequest: state => {
      state.loading = true;
    },
    updatePickupShipmentSuccess: state => {
      state.loading = false;
    },
    updatePickupShipmentFailure: state => {
      state.loading = false;
    },
  },
});

export const {
  updatePickupShipmentRequest,
  updatePickupShipmentSuccess,
  updatePickupShipmentFailure,
} = updatePickupShipmentSlice.actions;

export async function updatePickupShipment(
  dispatch: AppDispatch,
  data: UpdatePickupShipmentReqData,
) {
  dispatch(updatePickupShipmentRequest());
  try {
    const response = await postData(UPDATE_PICKUP_SHIPMENT_URL_END_POINT, data);
    dispatch(updatePickupShipmentSuccess());
    return response;
  } catch (error) {
    dispatch(updatePickupShipmentFailure);
    console.log(error);
  }
}

export default updatePickupShipmentSlice.reducer;
