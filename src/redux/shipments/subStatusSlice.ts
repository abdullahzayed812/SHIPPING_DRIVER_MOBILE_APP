import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SUB_STATUS_URL_END_POINT } from '../../constants/urls';
import { getData } from '../../helpers/api';
import { AppDispatch } from '../store';

interface SubStatusState {
  loading: boolean;
  subStatus: [];
}

const initialState: SubStatusState = {
  loading: false,
  subStatus: [],
};

const subStatusSlice = createSlice({
  name: 'subStatus',
  initialState,
  reducers: {
    subStatusRequest: state => {
      state.loading = false;
    },
    subStatusSuccess: (state, action: PayloadAction<[]>) => {
      state.loading = true;
      state.subStatus = action.payload;
    },
    subStatusFailure: state => {
      state.loading = false;
    },
  },
});

export const { subStatusRequest, subStatusSuccess, subStatusFailure } =
  subStatusSlice.actions;

export async function getSubStatus(
  dispatch: AppDispatch,
  params: { id: number },
) {
  dispatch(subStatusRequest());
  try {
    const response = await getData(SUB_STATUS_URL_END_POINT, 0, params);
    dispatch(subStatusSuccess(response?.data?.data));
    return response;
  } catch (error) {
    dispatch(subStatusFailure);
    console.log(error);
  }
}

export default subStatusSlice.reducer;
