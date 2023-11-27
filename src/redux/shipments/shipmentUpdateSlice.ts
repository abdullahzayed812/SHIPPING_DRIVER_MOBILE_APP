import { createSlice } from '@reduxjs/toolkit';
import { SHIPMENT_UPDATE_URL_END_POINT } from '../../constants/urls';
import { postData } from '../../helpers/api';
import { loadTokenData } from '../../helpers/asyncStorage';
import { ShipmentUpdateType } from '../../screens/ShipmentDetails';
import { AppDispatch } from '../store';

interface InitialStateType {
  loading: boolean;
}

const initialState: InitialStateType = {
  loading: false,
};

const shipmentUpdataSlice = createSlice({
  name: 'shipmentUpdate',
  initialState,
  reducers: {
    shipmentUpdateRequest: state => {
      state.loading = true;
    },
    shipmentUpdateSuccess: state => {
      state.loading = false;
    },
    shipmentUpdateFailure: state => {
      state.loading = false;
    },
  },
});

export const {
  shipmentUpdateRequest,
  shipmentUpdateSuccess,
  shipmentUpdateFailure,
} = shipmentUpdataSlice.actions;

export async function updateShipment(
  dispatch: AppDispatch,
  shipmentUpdateData: ShipmentUpdateType,
) {
  dispatch(shipmentUpdateRequest);
  try {
    const response = await postData(
      SHIPMENT_UPDATE_URL_END_POINT,
      shipmentUpdateData,
    );
    dispatch(shipmentUpdateSuccess);
    return response;
  } catch (error) {
    dispatch(shipmentUpdateFailure);
    console.log(error);
  }
}

export default shipmentUpdataSlice.reducer;
