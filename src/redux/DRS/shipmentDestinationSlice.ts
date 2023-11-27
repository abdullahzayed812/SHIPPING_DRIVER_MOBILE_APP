import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  SEARCH_BY_SCAN_SHIPMENT_URL_END_POINT,
  SHIPMENT_DESTINATION_URL_END_POINT,
} from '../../constants/urls';
import { getData } from '../../helpers/api';
import { AppDispatch } from '../store';

interface DataSourceData {
  receiver_lat: number | undefined;
  receiver_lng: number | undefined;
  receiver_address: string | undefined;
  awb: string | undefined;
  status: number | undefined;
  id?: number | undefined;
}

interface InitialState {
  loading: boolean;
  dataSource: {
    data: DataSourceData[];
    driver_location: {
      end_location_lat: number;
      end_location_lng: number;
      start_location_lat: number;
      start_location_lng: number;
    };
  };
}

const initialState: InitialState = {
  loading: false,
  dataSource: {
    data: [
      {
        receiver_lat: undefined,
        status: undefined,
        receiver_lng: undefined,
        receiver_address: undefined,
        awb: undefined,
        id: undefined,
      },
    ],
    driver_location: {
      end_location_lat: 0,
      end_location_lng: 0,
      start_location_lat: 0,
      start_location_lng: 0,
    },
  },
};

const shipmentDestinationSlice = createSlice({
  name: 'searchDrsShipmentByScan',
  initialState,
  reducers: {
    shipmentDestinationSliceRequest: state => {
      state.loading = true;
    },
    shipmentDestinationSliceSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.dataSource = action.payload;
    },
    shipmentDestinationSliceFailure: state => {
      state.loading = false;
    },
  },
});

export const {
  shipmentDestinationSliceRequest,
  shipmentDestinationSliceSuccess,
  shipmentDestinationSliceFailure,
} = shipmentDestinationSlice.actions;

export async function getShipmentDiraction(dispatch: AppDispatch, id: number) {
  dispatch(shipmentDestinationSliceRequest());
  try {
    const response = await getData(SHIPMENT_DESTINATION_URL_END_POINT, id);
    dispatch(shipmentDestinationSliceSuccess(response?.data));
    return response;
  } catch (error) {
    dispatch(shipmentDestinationSliceFailure());
    console.log(error);
  }
}

export default shipmentDestinationSlice.reducer;
