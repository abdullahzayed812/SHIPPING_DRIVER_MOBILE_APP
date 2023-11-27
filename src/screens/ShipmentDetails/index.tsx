import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SubHeader } from '../../components/Pickup/SubHeader';
import { CustomButton } from '../../components/Common/CustomButton';
import { styles } from './style';
import { IMAGES } from '../../helpers/images';
import { PickupModal } from '../../components/Pickup/PickupModal';
import { Header } from '../../components/Common/Header';
import { RouteProp } from '@react-navigation/native';
import { OrdersStackParamList } from '../../navigation/types';
import { getShipmentDetails } from '../../redux/shipments/shipmentDetailsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getSubStatus } from '../../redux/shipments/subStatusSlice';
import { InputField } from '../../components/Common/InputField';
import { loadUserData } from '../../helpers/asyncStorage';
import { Loading } from '../../components/Loading';
import { updateShipment } from '../../redux/shipments/shipmentUpdateSlice';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PaymentDetailsModal } from '../../components/Common/PaymentDetailsModal';
import { DeliveryInfo } from '../../components/Shipment/shipmentDetails/DeliveryInfo';
import { SenderCompany } from '../../components/Shipment/shipmentDetails/SenderCompany';
import { PackageInfo } from '../../components/Shipment/shipmentDetails/PackageInfo';
import { ShipmentStatus } from '../../components/Shipment/shipmentDetails/ShipmentStatus';
import { ShipmentReasonText } from '../../components/Shipment/shipmentDetails/ShipmentReasonText';
import { CalenderModal } from '../../components/Shipment/shipmentDetails/CalenderModal';
import { UploadImage } from '../../components/Shipment/shipmentDetails/UploadImage';
import { ShipmentDeliveredPayment } from '../../components/Shipment/shipmentDetails/ShipmentDeliveredPayment';
import i18n from '../../helpers/language';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

interface Props {
  navigation: NativeStackNavigationProp<
    OrdersStackParamList,
    'ShipmentDetails'
  >;
  route: RouteProp<OrdersStackParamList, 'ShipmentDetails'>;
}

export interface ShipmentUpdateType {
  driver_id: number | undefined;
  drs_id: number | undefined;
  shipment_id: number | undefined;
  status: number | undefined;
  substatus_id: number | undefined;
  comment: string;
  m_receiver_name?: string;
  receiver_id?: number | string;
  receiver_cash_type?: string;
  cash_value?: number;
  receiver_confirmation_code?: string;
}

export const ShipmentDetails: React.FC<Props> = ({ navigation, route }) => {
  const [reasonIndex, setReasonIndex] = useState<number | undefined>(undefined);
  const [userId, setUserId] = useState<number | undefined>(undefined);
  const [shipmentStatus, setShipmentStatus] = useState<number | undefined>(
    undefined,
  );
  const [shipmentReasonId, setShipmentReasonId] = useState<number | undefined>(
    undefined,
  );
  const [shipmentReason, setShipmentReason] = useState<string>('');
  const [addReasonInputValue, setAddReasonInputValue] = useState<string>('');
  const [uploadNotDeliveredImage, setUploadNotDeliveredImage] = useState<
    string | undefined
  >('');
  const [uploadDeliveredImage, setUploadDeliveredImage] = useState<
    string | undefined
  >('');
  const [addName, setAddName] = useState<string>('');
  const [addPhone, setAddPhone] = useState<string>('');
  const [cashValue, setCashValue] = useState<string>('');
  const [buttonTitle, setButtonTitle] = useState<string>('');
  const [receiverCashType, setReceiverCashType] = useState<string>('');
  const [confirmationCode, setConfirmationCode] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showShipmentDetails, setShowShipmentDetails] =
    useState<boolean>(false);
  const [showCalender, setShowCalender] = useState<boolean>(true);
  const [showPaymentDetailsModal, setShowPaymentDetailsModal] =
    useState<boolean>(false);
  const [clickedBothButton, setClickedBothButton] = useState<boolean>(false);

  const { shipmentDetails } = useAppSelector(state => state.shipmentDetails);
  const { subStatus } = useAppSelector(state => state.subStatus);
  const { loading } = useAppSelector(state => state.shipmentUpdate);

  const {
    receiver_name,
    receiver_id,
    receiver_address,
    receiver_phone,
    sender_phone,
    sender_address,
    created_at,
    payment_mode,
    total_cod_amount,
    substatus_id,
    status,
    account_number,
  } = shipmentDetails;

  const { shipmentId, awb, drsId } = route.params;

  const dispatch = useAppDispatch();

  const subStatusParams = {
    id: 11,
  };

  const toggleShowModal = () => {
    setShowModal(!showModal);
    setShowShipmentDetails(false);
  };

  const toggleShowShipmentDetails = () => {
    setShowShipmentDetails(!showShipmentDetails);
  };

  const loadShipmentDetails = async () => {
    await getShipmentDetails(dispatch, shipmentId);
    await getSubStatus(dispatch, subStatusParams);
    const { id: userId } = await loadUserData();
    setUserId(userId);
  };

  const updateShipmentFunc = async () => {
    if (!shipmentStatus) {
      Toast.show({
        type: 'error',
        text1: i18n.t('shipmentStatusIsRequired').toString(),
        text2: i18n.t('updateShipmentError').toString(),
      });
      return;
    }

    // Not delivered status
    if (shipmentStatus === 11) {
      const updateShipmentData = {
        driver_id: userId,
        drs_id: drsId,
        shipment_id: shipmentId,
        status: shipmentStatus,
        substatus_id: shipmentReasonId,
        comment: addReasonInputValue,
        receiver_id: receiver_id,
        m_receiver_name: '',
      };

      // Reschedule for future date
      if (shipmentReasonId === 38 && !addReasonInputValue) {
        Toast.show({
          type: 'error',
          text1: i18n.t('dateRequired').toString(),
          text2: i18n.t('dateErrorMessage').toString(),
        });
        return;
      }

      // Wrong area/reschedule
      // Customer cancelled the order
      if (
        (shipmentReasonId === 29 || shipmentReasonId === 30) &&
        !addReasonInputValue
      ) {
        Toast.show({
          type: 'error',
          text1: i18n.t('reasonRequired').toString(),
          text2: i18n.t('reasonRequiredErrorMsg').toString(),
        });
        return;
      }

      const updateShipmentResponse = await updateShipment(
        dispatch,
        updateShipmentData,
      );
      if (updateShipmentResponse?.status === 200) {
        navigation.goBack();
      }
    }

    if (shipmentStatus === 7) {
      // shipment status.js in perfect app
      // check for confirmation code
      // check for account number ##### image is required
      // check for paymentMod is cod and receiver cash type must entered
      // check if receiver cash type is "both" cash value must be exist
      // check if receiver cash type is 'both' && cash value !== '' && cash value >= total_value
      const updateShipmentData = {
        driver_id: userId,
        drs_id: drsId,
        shipment_id: shipmentId,
        status: shipmentStatus,
        substatus_id: shipmentReasonId,
        comment: addReasonInputValue,
        receiver_id: receiver_id,
        m_receiver_name: addName,
        receiver_cash_type: receiverCashType,
        cash_value: +cashValue,
        receiver_confirmation_code: confirmationCode,
      };

      // No Confirmation code
      if (!confirmationCode) {
        Toast.show({
          type: 'error',
          text1: i18n.t('confirmationCodeRequired').toString(),
          text2: i18n.t('confirmationCodeRequiredErrorMsg').toString(),
        });
        return;
      }

      if (account_number == 310852159 && !uploadDeliveredImage) {
        Toast.show({
          type: 'error',
          text1: i18n.t('uploadImageRequired').toString(),
          text2: i18n.t('uploadImageRequiredErrorMsg').toString(),
        });
        return;
      }

      // No cash type entered ||
      // Not identical to payment mode ||
      // Cash type is both & cash value less than total amount ||
      // No cash value
      if (!receiverCashType && payment_mode === 'COD') {
        Toast.show({
          type: 'error',
          text1: i18n.t('paymentMessage').toString(),
        });
        return;
      } else if (receiverCashType === 'BOTH' && cashValue >= total_cod_amount) {
        Toast.show({
          type: 'error',
          text1: i18n.t('cashMustBeLess').toString(),
          text2: i18n.t('cashMustBeLessErrorMsg').toString(),
        });
        return;
      } else if (receiverCashType === 'BOTH' && !cashValue) {
        Toast.show({
          type: 'error',
          text1: i18n.t('cashValueRequired').toString(),
          text2: i18n.t('cashValueRequiredErrorMsg').toString(),
        });
        return;
      }

      const updateShipmentResponse = await updateShipment(
        dispatch,
        updateShipmentData,
      );
      if (updateShipmentResponse?.status === 200) {
        navigation.goBack();
      }
    }
  };

  const changeStatusAndSelectReason = (
    reason: string,
    shipmentReasonId: number | undefined,
  ) => {
    setShowModal(false);
    setShipmentReason(reason);
    setShipmentReasonId(shipmentReasonId);
    if (shipmentReasonId === 38) {
      setShowCalender(true);
    }
  };

  const handleDateChange = (date: any) => {
    const { _d: stringDate } = date;
    const newDateString = stringDate
      .toString()
      .split(' ')
      .slice(0, 4)
      .join(' ');
    setAddReasonInputValue(newDateString);
  };

  const handleCancel = () => {
    setShowCalender(false);
    setAddReasonInputValue('');
  };

  useEffect(() => {
    setShipmentReason(substatus_id);
  }, [substatus_id]);

  useEffect(() => {
    if (status === 'جاهزة للالتقاط من العميل' || status === 'جاري التوصيل')
      setButtonTitle('');
    else if (status === 'لم يتم التوصيل')
      setButtonTitle(prev => (prev = i18n.t('notDelivered')));
    else if ('تم التوصيل') setButtonTitle(prev => (prev = i18n.t('delivered')));
  }, [status]);

  useLayoutEffect(() => {
    loadShipmentDetails();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header
        backImageSource={IMAGES.leftArrow}
        logoImageSource={IMAGES.logo}
      />
      <SubHeader text="AWB" textValue={awb} />
      <ScrollView style={styles.container}>
        <DeliveryInfo
          receiverName={receiver_name}
          receiverAddress={receiver_address}
          receiverPhone={receiver_phone}
        />
        <SenderCompany
          senderAddress={sender_address}
          senderPhone={sender_phone}
        />
        <PackageInfo
          createdAt={created_at}
          paymentMode={payment_mode}
          totalCodAmount={total_cod_amount}
        />
        <ShipmentStatus
          buttonTitle={buttonTitle}
          toggleShowModal={toggleShowModal}
        />
        <View style={styles.notDeliveredBox}>
          <ShipmentReasonText
            shipmentReason={shipmentReason}
            buttonTitle={buttonTitle}
          />
          {buttonTitle === i18n.t('notDelivered') && shipmentReasonId === 38 ? (
            <CalenderModal
              showCalender={showCalender}
              handleCancel={handleCancel}
              handleDateChange={handleDateChange}
              setShowCalender={setShowCalender}
            />
          ) : buttonTitle === i18n.t('notDelivered') &&
            (shipmentReasonId === 30 ||
              shipmentReasonId === 28 ||
              shipmentReasonId === 21 ||
              shipmentReasonId === 68) ? (
            <UploadImage
              setUploadNotDeliveredImage={setUploadNotDeliveredImage}
              inputValue={addReasonInputValue}
              setInputValue={setAddReasonInputValue}
            />
          ) : buttonTitle === i18n.t('delivered') || shipmentStatus === 7 ? (
            <ShipmentDeliveredPayment
              clickedBothButton={clickedBothButton}
              cashValue={cashValue}
              setCashValue={setCashValue}
              uploadDeliveredImage={uploadDeliveredImage}
              setUploadDeliveredImage={setUploadDeliveredImage}
              addName={addName}
              setAddName={setAddName}
              addPhone={addPhone}
              setAddPhone={setAddPhone}
              confirmationCode={confirmationCode}
              setConfirmationCode={setConfirmationCode}
            />
          ) : (
            <InputField
              placeholder={i18n.t('addExtraReason').toString()}
              multiline
              inputContainerStyle={styles.inputContainerStyle}
              value={addReasonInputValue}
              setValue={setAddReasonInputValue}
            />
          )}
        </View>
        <PickupModal
          showModal={showModal}
          toggleShowModal={toggleShowModal}
          text={i18n.t('selectStatus').toString()}
          showShipmentDetails={showShipmentDetails}
          toggleShowShipmentDetails={toggleShowShipmentDetails}
          changeStatusAndSelectReason={changeStatusAndSelectReason}
          notDeliveredReasons={subStatus}
          reasonIndex={reasonIndex}
          setReasonIndex={setReasonIndex}
          setButtonTitle={setButtonTitle}
          setShipmentStatus={setShipmentStatus}
          setShipmentReasonId={setShipmentReasonId}
          setShowPaymentDetailsModal={setShowPaymentDetailsModal}
          paymentMode={payment_mode}
        />
        <PaymentDetailsModal
          showPaymentDetailsModal={showPaymentDetailsModal}
          setShowPaymentDetailsModal={setShowPaymentDetailsModal}
          setClickedBothButton={setClickedBothButton}
          setReceiverCashType={setReceiverCashType}
        />
        <CustomButton
          title={i18n.t('updateShipment').toString()}
          buttonStyle={styles.updateShipmentBtn}
          onPress={updateShipmentFunc}
        />
      </ScrollView>
    </>
  );
};
