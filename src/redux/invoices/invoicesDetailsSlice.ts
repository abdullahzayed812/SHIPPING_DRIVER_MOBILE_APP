import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INVOICES_DETAILS_URL_END_POINT } from '../../constants/urls';
import { getData } from '../../helpers/api';
import { AppDispatch } from '../store';

interface InvoicesDetailsState {
  loading: boolean;
  invoicesDetails: [];
}

const initialState: InvoicesDetailsState = {
  loading: false,
  invoicesDetails: [],
};

const invoicesDetailsSlice = createSlice({
  name: 'invoicesDetails',
  initialState,
  reducers: {
    invoicesDetailsRequest: state => {
      state.loading = true;
    },
    invoicesDetailsSuccess: (state, action: PayloadAction<[]>) => {
      state.loading = false;
      state.invoicesDetails = action.payload;
    },
    invoicesDetailsFailure: state => {
      state.loading = false;
    },
  },
});

export const {
  invoicesDetailsRequest,
  invoicesDetailsSuccess,
  invoicesDetailsFailure,
} = invoicesDetailsSlice.actions;

export async function getInvoicesDetails(
  dispatch: AppDispatch,
  id: number,
  data: { invoice_id: number },
) {
  dispatch(invoicesDetailsRequest());
  try {
    const response = await getData(INVOICES_DETAILS_URL_END_POINT, id, data);
    dispatch(invoicesDetailsSuccess(response?.data?.data));
    return response;
  } catch (error) {
    dispatch(invoicesDetailsFailure);
    console.log(error);
  }
}

export default invoicesDetailsSlice.reducer;
