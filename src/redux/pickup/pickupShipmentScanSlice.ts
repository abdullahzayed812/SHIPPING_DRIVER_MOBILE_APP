import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UPDATE_PICKUP_SHIPMENT_URL_END_POINT } from '../../constants/urls';
import { postData } from '../../helpers/api';
import { PickupShipmentScanReqData } from '../../screens/BulkPickup';
import { AppDispatch } from '../store';

interface InitialState {
  loading: boolean;
  countShipmentSuccess: [];
  failedShipments: [];
  statusCode: number | undefined;
}

const initialState: InitialState = {
  loading: false,
  countShipmentSuccess: [],
  failedShipments: [],
  statusCode: undefined,
};

const pickupShipmentScanSlice = createSlice({
  name: 'pickupShipmentScan',
  initialState,
  reducers: {
    pickupShipmentScanRequest: state => {
      state.loading = true;
    },
    pickupShipmentScanSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.countShipmentSuccess = action.payload.count_shipment_success;
      state.failedShipments = action.payload.failed_shipments;
      if (action.payload.status === 200) {
        if (action.payload.failed_shipments.length > 0) {
          state.statusCode = 201;
        } else {
          state.statusCode = 200;
        }
      } else if (action.payload.status === 404) {
        state.statusCode = 404;
      } else {
        state.statusCode = 500;
      }
    },
    pickupShipmentScanFailure: state => {
      state.loading = false;
    },
  },
});

export const {
  pickupShipmentScanRequest,
  pickupShipmentScanSuccess,
  pickupShipmentScanFailure,
} = pickupShipmentScanSlice.actions;

export async function pickupShipmentScanReq(
  dispatch: AppDispatch,
  data: PickupShipmentScanReqData,
) {
  dispatch(pickupShipmentScanRequest());
  try {
    const response = await postData(UPDATE_PICKUP_SHIPMENT_URL_END_POINT, data);
    dispatch(pickupShipmentScanSuccess(response?.data));
    return response;
  } catch (error) {
    dispatch(pickupShipmentScanFailure());
    console.log(error);
  }
}

export default pickupShipmentScanSlice.reducer;
