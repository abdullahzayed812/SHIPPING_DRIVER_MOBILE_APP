import { NavigatorScreenParams } from "@react-navigation/native";

export type SplashStackParamList = {
  SplashScreen: undefined;
  IntroductionScreen: undefined;
  ChooseLangScreen: undefined;
};

export type AuthStackParamList = {
  SignUp: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  CheckSMS: undefined;
  CreateNewAccount: undefined;
  CreateNewAccount2: {
    branch_id: string | number;
    phone: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
};

export type InvoicesStackParamList = {
  InvoiceList: undefined;
  InvoiceDetails: { id: number };
};

export type OrdersStackParamList = {
  DRSList: { isDRSList: boolean };
  ShipmentList: {
    drsId: number;
    drsBarcode: string;
    awb: string;
  };
  ShipmentDetails: {
    shipmentId: number;
    awb: string;
    drsId: number;
  };
  ReadyForReversePickupScan: {
    receiverPhone: string;
    senderLat: number;
    senderLng: number;
    drsId: number;
    shipmentId: number;
  };
  NotPickup: { drsId: number; shipmentId: number };
  ScanAndPickup: { drsId: number };
  SearchByScanShipment: { drsId: number };
  DRSDestination: { drsId: number };
};

export type PickUpStackParamList = {
  PickupList: { isPickupList: boolean };
  PickupShipment: { id: number };
  ScanShipment: {
    receiverAddress: string | undefined;
    receiverPhone: string | undefined;
    senderLat: number | undefined;
    senderLng: number | undefined;
    signatureResult: string;
    awb: string;
  };
};

export type ProfileStackParamList = {
  ProfileScreen: undefined;
};

export type ScanStackParamList = {
  ScanScreen: undefined;
  BulkPickup: undefined;
  ScanShipmentByCamera: undefined;
  ScanShipmentByScanner: undefined;
  ScannedShipmentsList: {
    scannedShipments: string[] | undefined;
  };
};

export type TabStackParamList = {
  HomeScreen: undefined;
  PickupStackScreen: NavigatorScreenParams<PickUpStackParamList>;
  OrdersStackScreen: NavigatorScreenParams<OrdersStackParamList>;
  InvoicesStackScreen: NavigatorScreenParams<InvoicesStackParamList>;
  ScanStackScreen: NavigatorScreenParams<ScanStackParamList>;
  ProfileStackScreen: NavigatorScreenParams<ProfileStackParamList>;
};

export type RootStackParamList = {
  Splash: NavigatorScreenParams<SplashStackParamList>;
  AuthStackScreen: NavigatorScreenParams<AuthStackParamList>;
  TabStackScreen: NavigatorScreenParams<TabStackParamList>;
};
