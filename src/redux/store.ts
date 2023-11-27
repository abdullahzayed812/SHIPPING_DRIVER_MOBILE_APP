import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './auth/loginSlice';
import registerReducer from './auth/registerSlice';
import forgotPasswordReducer from './auth/forgotPasswordSlice';
import pickupListReducer from './pickup/pickupListSlice';
import pickupHistoryReducer from './pickup/pickupHistorySlice';
import pickupShipmentReducer from './pickup/pickupShipmentSlice';
import drsListReducer from './DRS/drsListSlice';
import drsHistoryReducer from './DRS/drsHistorySlice';
import invoicesListReducer from './invoices/invoicesListSlice';
import invoicesDetailsReducer from './invoices/invoicesDetailsSlice';
import shipmentListReducer from './shipments/shipmentListSlice';
import shipmentDetailsReducer from './shipments/shipmentDetailsSlice';
import subStatusReducer from './shipments/subStatusSlice';
import shipmentUpdateReducer from './shipments/shipmentUpdateSlice';
import notPickupSubStatusReducer from './DRS/notPickupSubStatusSlice';
import pickupShipmentScanReducer from './pickup/pickupShipmentScanSlice';
import updatePickupShipmentReducer from './pickup/updatePickupShipmentSlice';
import searchDrsShipmentByScanReducer from './DRS/searchDrsShipmentByscanSlice';
import shipmentDestinationReducer from './DRS/shipmentDestinationSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    forgotPassword: forgotPasswordReducer,
    pickupList: pickupListReducer,
    pickupHistory: pickupHistoryReducer,
    drsList: drsListReducer,
    drsHistory: drsHistoryReducer,
    pickupShipment: pickupShipmentReducer,
    invoicesList: invoicesListReducer,
    invoicesDetails: invoicesDetailsReducer,
    shipmentList: shipmentListReducer,
    shipmentDetails: shipmentDetailsReducer,
    shipmentUpdate: shipmentUpdateReducer,
    subStatus: subStatusReducer,
    notPickupSubStatus: notPickupSubStatusReducer,
    pickupShipmentScan: pickupShipmentScanReducer,
    updatePickupShipment: updatePickupShipmentReducer,
    searchDrsShipmentBuScan: searchDrsShipmentByScanReducer,
    shipmentDestination: shipmentDestinationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
