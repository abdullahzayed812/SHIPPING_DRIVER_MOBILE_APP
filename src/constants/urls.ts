const BASE_URL: string = 'https://go-pallet.com/';

const LOGIN_URL_END_POINT: string = 'mobile/api/auth/login';

const REGISTER_URL_END_POINT: string = 'mobile/api/auth/register';

const FORGOT_PASSWORD_URL_END_POINT: string = 'mobile/api/auth/reset-password';

const CONRIMATION_CODE_URL_END_POINT: string =
  'mobile/api/auth/confirm-register';

const PICKUP_LIST_URL_END_POINT: string = 'mobile/api/pickup/';

const PICKUP_HISTORY_URL_END_POINT: string = 'mobile/api/pickup/history/';

const PICKUP_SHIPMENT_URL_END_POINT: string = 'mobile/api/pickup/show/';

const DRS_LIST_URL_END_POINT: string = 'mobile/api/drs/';

const DRS_HISTORY_URL_END_POINT: string = 'mobile/api/drs/history';

const BRANCHES_URL_END_POINT: string = 'mobile/api/branches';

const INVOICES_LIST_URL_END_POINT: string = 'mobile/api/invoices';

const INVOICES_DETAILS_URL_END_POINT: string = 'mobile/api/invoices/details';

const SHIPMENT_LIST_URL_END_POINT: string = 'mobile/api/drs/show/';

const SHIPMENT_DETAILS_URL_END_POINT: string = 'mobile/api/shipment/';

const SUB_STATUS_URL_END_POINT: string = 'mobile/api/sub-status';

const SHIPMENT_UPDATE_URL_END_POINT: string =
  'mobile/api/shipment/update-status';

const NOT_PICKUP_SUB_STATUS: string = 'mobile/api/sub-status';

const UPDATE_PICKUP_SHIPMENT_URL_END_POINT: string =
  'mobile/api/new-pickup/update-shipment';

const SEARCH_BY_SCAN_SHIPMENT_URL_END_POINT: string =
  'mobile/api/shipment/search';

const SHIPMENT_DESTINATION_URL_END_POINT: string =
  'mobile/api/drs/maps/shipments/';

export {
  BASE_URL,
  LOGIN_URL_END_POINT,
  REGISTER_URL_END_POINT,
  FORGOT_PASSWORD_URL_END_POINT,
  CONRIMATION_CODE_URL_END_POINT,
  PICKUP_LIST_URL_END_POINT,
  PICKUP_HISTORY_URL_END_POINT,
  PICKUP_SHIPMENT_URL_END_POINT,
  DRS_LIST_URL_END_POINT,
  DRS_HISTORY_URL_END_POINT,
  BRANCHES_URL_END_POINT,
  INVOICES_LIST_URL_END_POINT,
  INVOICES_DETAILS_URL_END_POINT,
  SHIPMENT_LIST_URL_END_POINT,
  SHIPMENT_DETAILS_URL_END_POINT,
  SUB_STATUS_URL_END_POINT,
  SHIPMENT_UPDATE_URL_END_POINT,
  NOT_PICKUP_SUB_STATUS,
  UPDATE_PICKUP_SHIPMENT_URL_END_POINT,
  SEARCH_BY_SCAN_SHIPMENT_URL_END_POINT,
  SHIPMENT_DESTINATION_URL_END_POINT,
};
