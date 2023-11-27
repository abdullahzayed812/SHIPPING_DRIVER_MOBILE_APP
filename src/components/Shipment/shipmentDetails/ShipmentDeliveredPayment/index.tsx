import React, { Dispatch, SetStateAction } from 'react';
import { Image, Text, View } from 'react-native';
import { takePhoto } from '../../../../utils/global';
import { globalStyle } from '../../../../utils/globalStyles/globalStyles';
import { CustomButton } from '../../../Common/CustomButton';
import { InputField } from '../../../Common/InputField';
import { styles } from './style';

interface Props {
  clickedBothButton: boolean;
  cashValue: string;
  setCashValue: Dispatch<SetStateAction<string>>;
  uploadDeliveredImage: string | undefined;
  setUploadDeliveredImage: Dispatch<SetStateAction<string | undefined>>;
  addName: string;
  setAddName: Dispatch<SetStateAction<string>>;
  addPhone: string;
  setAddPhone: Dispatch<SetStateAction<string>>;
  confirmationCode: string;
  setConfirmationCode: Dispatch<SetStateAction<string>>;
}

export const ShipmentDeliveredPayment: React.FC<Props> = ({
  clickedBothButton,
  cashValue,
  setCashValue,
  uploadDeliveredImage,
  setUploadDeliveredImage,
  addName,
  setAddName,
  addPhone,
  setAddPhone,
  confirmationCode,
  setConfirmationCode,
}) => {
  return (
    <View>
      {clickedBothButton ? (
        <View style={styles.cashValue}>
          <Text style={styles.cashValueText}>Cash Value: </Text>
          <InputField
            inputContainerStyle={styles.cashValueInput}
            value={cashValue}
            setValue={setCashValue}
          />
        </View>
      ) : null}
      <Text style={globalStyle.text}>Delivery Code</Text>
      <View style={styles.newCodeBox}>
        <InputField
          inputContainerStyle={styles.newCodeInput}
          placeholder="Enter Code"
          value={confirmationCode}
          setValue={setConfirmationCode}
        />
        <CustomButton title="New Code" buttonStyle={styles.newCodeBtn} />
      </View>
      <View style={[styles.newCodeBox, styles.takePhoto]}>
        <View style={styles.imageBox}>
          {uploadDeliveredImage ? (
            <Image
              source={{ uri: uploadDeliveredImage }}
              style={styles.uploadedImage}
            />
          ) : null}
        </View>
        <CustomButton
          title="Take Photo"
          buttonStyle={styles.newCodeBtn}
          onPress={() => takePhoto(setUploadDeliveredImage)}
        />
      </View>
      <View style={styles.addNameBox}>
        <Text style={styles.addNameTitle}>
          In case of absence of the customer
        </Text>
        <View style={styles.inputBox}>
          <InputField
            placeholder="Add Name"
            inputContainerStyle={styles.addNameInput}
            value={addName}
            setValue={setAddName}
          />
          <InputField
            placeholder="Add Phone"
            inputContainerStyle={styles.addNameInput}
            value={addPhone}
            setValue={setAddPhone}
          />
        </View>
      </View>
    </View>
  );
};
