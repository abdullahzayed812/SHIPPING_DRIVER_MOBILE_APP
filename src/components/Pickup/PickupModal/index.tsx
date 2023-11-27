import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import {
  I18nManager,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../../../helpers/colors';

import { IMAGES } from '../../../helpers/images';
import { CustomButton } from '../../Common/CustomButton';
import { ShipmentDetailsModalRow } from '../../Shipment/shipmentDetails/ShipmentDetailsModalRow';
import SignatureCapture, {
  SaveEventParams,
} from 'react-native-signature-capture';
import { styles } from './style';
import i18n from '../../../helpers/language';
import { I18nContext } from 'react-i18next';

interface Props {
  toggleShowModal?: () => void;
  showModal?: boolean;
  pickupShipment?: boolean;
  shipmentDetails?: boolean;
  text?: string;
  showShipmentDetails?: boolean;
  toggleShowShipmentDetails?: () => void;
  branches?: boolean;
  changeStatusAndSelectReason?: (
    reason: string,
    shipmentReasonId: number | undefined,
  ) => void;
  notDeliveredReasons?: [] | undefined;
  reasonIndex?: number | undefined;
  setReasonIndex?: Dispatch<SetStateAction<number | undefined>>;
  setButtonTitle?: Dispatch<SetStateAction<string>>;
  setSignatureResult?: Dispatch<SetStateAction<string>>;
  setShipmentStatus?: Dispatch<SetStateAction<number | undefined>>;
  setShipmentReasonId?: Dispatch<SetStateAction<number | undefined>>;
  setShowPaymentDetailsModal?: Dispatch<SetStateAction<boolean>>;
  paymentMode?: string;
}

export const PickupModal: React.FC<Props> = ({
  toggleShowModal,
  showModal,
  pickupShipment,
  text,
  showShipmentDetails,
  toggleShowShipmentDetails,
  changeStatusAndSelectReason,
  notDeliveredReasons,
  reasonIndex,
  setReasonIndex,
  setButtonTitle,
  setSignatureResult,
  setShipmentStatus,
  setShowPaymentDetailsModal,
  paymentMode,
}) => {
  const signatureRef = useRef<any>(null);

  const handleNotDeliveredPress = () => {
    toggleShowShipmentDetails?.();
    setButtonTitle?.(prev => (prev = i18n.t('notDelivered')));
    setShipmentStatus?.(11);
  };

  const handleDeliveredPress = () => {
    setButtonTitle?.(prev => (prev = i18n.t('delivered')));
    toggleShowModal?.();
    setShipmentStatus?.(7);
    if (paymentMode === 'COD') {
      setShowPaymentDetailsModal?.(true);
    }
  };

  const handleOnSaveEvent = (result: SaveEventParams) => {
    setSignatureResult?.(result.encoded);
    toggleShowModal?.();
  };

  return (
    <Modal animationType="slide" visible={showModal} transparent>
      <View style={styles.modalOverlay}>
        <View
          style={[
            styles.modalContent,
            showShipmentDetails && styles.moveModalUp,
          ]}
        >
          <View style={styles.imgBox}>
            <TouchableOpacity
              onPress={toggleShowModal}
              style={styles.closeModal}
            >
              <Image source={IMAGES.close} style={styles.closeImg} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>{text}</Text>
            {pickupShipment ? (
              <>
                <View style={styles.inputBox}>
                  <SignatureCapture
                    style={styles.input}
                    ref={signatureRef}
                    onSaveEvent={result => handleOnSaveEvent(result)}
                    saveImageFileInExtStorage={false}
                    showNativeButtons={false}
                    showTitleLabel={false}
                    backgroundColor="#ffffff"
                    strokeColor="#000000"
                    minStrokeWidth={8}
                    maxStrokeWidth={8}
                    viewMode={'portrait'}
                  />
                  <Image source={IMAGES.signature} />
                </View>
                <CustomButton
                  title={i18n.t('submit').toString()}
                  buttonStyle={styles.modalButtonStyle}
                  onPress={() => signatureRef.current.saveImage()}
                />
                <TouchableOpacity
                  onPress={() => signatureRef.current.resetImage()}
                >
                  <Text style={styles.resetText}>{i18n.t('reset')}</Text>
                </TouchableOpacity>
              </>
            ) : !showShipmentDetails ? (
              <>
                <CustomButton
                  title={i18n.t('notDelivered').toString()}
                  outline
                  buttonStyle={styles.buttonStyle}
                  titleStyle={styles.buttonTitleStyle}
                  onPress={handleNotDeliveredPress}
                />
                <CustomButton
                  title={i18n.t('delivered').toString()}
                  outline
                  buttonStyle={styles.buttonStyle}
                  titleStyle={styles.buttonTitleStyle}
                  outlineStyle={styles.buttonOutlineStyle}
                  onPress={handleDeliveredPress}
                />
              </>
            ) : (
              <>
                <Text style={styles.lightText}>
                  {i18n.t('shipmentReasonTitle')}
                </Text>
                <View style={styles.shipmentDetialsBox}>
                  {notDeliveredReasons?.map(
                    ({ title, title_ar, id }, index, array) => (
                      <ShipmentDetailsModalRow
                        shipmentReasonId={id}
                        key={index}
                        text={I18nManager.isRTL ? title : title_ar}
                        index={index}
                        lastElement={index === array.length - 1}
                        changeStatusAndSelectReason={
                          changeStatusAndSelectReason
                        }
                        setReasonIndex={setReasonIndex}
                        color={
                          reasonIndex === index
                            ? { color: colors.blue }
                            : { color: colors.lightGreen }
                        }
                      />
                    ),
                  )}
                </View>
              </>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};
