import React, { Dispatch, SetStateAction } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { CustomButton } from '../CustomButton';
import { styles } from './style';

interface Props {
  showPaymentDetailsModal: boolean;
  setShowPaymentDetailsModal: Dispatch<SetStateAction<boolean>>;
  setClickedBothButton: Dispatch<SetStateAction<boolean>>;
  setReceiverCashType: Dispatch<SetStateAction<string>>;
}

export const PaymentDetailsModal: React.FC<Props> = ({
  showPaymentDetailsModal,
  setShowPaymentDetailsModal,
  setClickedBothButton,
  setReceiverCashType,
}) => {
  const handleClick = (type: string) => {
    if (type === 'POS') {
      setShowPaymentDetailsModal(false);
      setReceiverCashType(type);
    } else if (type === 'COD') {
      setShowPaymentDetailsModal(false);
      setReceiverCashType(type);
    } else if (type === 'BOTH') {
      setShowPaymentDetailsModal(false);
      setClickedBothButton(true);
      setReceiverCashType(type);
    }
  };

  return (
    <Modal visible={showPaymentDetailsModal} transparent animationType="slide">
      <TouchableOpacity
        style={styles.modal}
        onPress={() => setShowPaymentDetailsModal(false)}
        activeOpacity={1}
      >
        <View style={styles.modalBox}>
          <Text style={styles.modalTitle}>
            Please confirm the payment method that the customer do it
          </Text>
          <View style={styles.buttonsBox}>
            <CustomButton
              title="POS Machine"
              buttonStyle={{ ...styles.buttonStyle, ...styles.spcificWidth }}
              onPress={() => handleClick('POS')}
            />
            <CustomButton
              title="Cash"
              buttonStyle={styles.buttonStyle}
              onPress={() => handleClick('COD')}
            />
          </View>
          <CustomButton
            title="Both"
            buttonStyle={{ ...styles.buttonStyle, ...styles.grayButton }}
            onPress={() => handleClick('BOTH')}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
