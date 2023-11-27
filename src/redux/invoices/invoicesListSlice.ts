import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INVOICES_LIST_URL_END_POINT } from '../../constants/urls';
import { getData } from '../../helpers/api';
import { AppDispatch } from '../store';

interface InvoicesListState {
  invoicesListLoading: boolean;
  invoicesList: [];
}

const initialState: InvoicesListState = {
  invoicesListLoading: false,
  invoicesList: [],
};

const invoicesListSlice = createSlice({
  name: 'invoicesList',
  initialState,
  reducers: {
    invoicesListRequest: state => {
      state.invoicesListLoading = true;
    },
    invoicesListSuccess: (state, action: PayloadAction<[]>) => {
      state.invoicesListLoading = false;
      state.invoicesList = action.payload;
    },
    invoicesListFailure: state => {
      state.invoicesListLoading = false;
    },
  },
});

export const { invoicesListRequest, invoicesListSuccess, invoicesListFailure } =
  invoicesListSlice.actions;

export async function getInvoicesList(dispatch: AppDispatch) {
  dispatch(invoicesListRequest());
  try {
    const response = await getData(INVOICES_LIST_URL_END_POINT);
    dispatch(invoicesListSuccess(response?.data?.data));
    return response;
  } catch (error) {
    dispatch(invoicesListFailure);
    console.log(error);
  }
}

export default invoicesListSlice.reducer;
