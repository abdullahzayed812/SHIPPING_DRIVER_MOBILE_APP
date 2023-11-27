import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  ViewStyle,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';
import { styles } from './style';
import { UserStateProps } from '../../../screens/Login';
import { globalStyle } from '../../../utils/globalStyles/globalStyles';
import { VERTICAL_SPACING } from '../../../constants/spacing';
import { colors } from '../../../helpers/colors';

interface Props {
  label?: string;
  imageSource?: any;
  placeholder?: string;
  inputContainerStyle?: ViewStyle;
  imageLeftViewSource?: any;
  textLeftView?: string;
  imageSize?: ImageStyle;
  data?: UserStateProps;
  value?: string;
  setValue?: any;
  editable?: boolean;
  secureTextEntry?: boolean;
  setSecureTextEntry?: Dispatch<SetStateAction<boolean>>;
  touchableImage?: boolean;
  errorMessage?: string;
  validationMessage?: string;
  multiline?: boolean;
  setShowSearchItemModal?: Dispatch<SetStateAction<boolean>>;
  scannerImage?: any;
  handleScannerPress?: () => void;
}

export const InputField: React.FC<Props> = ({
  label,
  imageSource,
  placeholder,
  inputContainerStyle,
  imageLeftViewSource,
  textLeftView,
  imageSize,
  value,
  setValue,
  editable,
  secureTextEntry,
  setSecureTextEntry,
  touchableImage,
  errorMessage,
  multiline,
  setShowSearchItemModal,
  scannerImage,
  handleScannerPress,
}) => {
  return (
    <View style={{ marginBottom: VERTICAL_SPACING }}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View
        style={[
          styles.inputContainer,
          inputContainerStyle,
          imageLeftViewSource && styles.marginTop,
        ]}
      >
        {scannerImage ? (
          <TouchableOpacity onPress={handleScannerPress}>
            <Image
              source={scannerImage}
              style={[styles.leftImg, { marginRight: 10 }]}
            />
          </TouchableOpacity>
        ) : null}
        {imageLeftViewSource ? (
          <TouchableOpacity
            style={styles.leftView}
            onPress={() => setShowSearchItemModal?.(true)}
          >
            <Text style={globalStyle.normalText}>{textLeftView}</Text>
            <Image source={imageLeftViewSource} style={styles.leftImg} />
          </TouchableOpacity>
        ) : null}
        <TextInput
          secureTextEntry={secureTextEntry}
          editable={editable ? false : true}
          placeholder={placeholder}
          style={styles.input}
          value={value}
          onChangeText={setValue}
          placeholderTextColor={colors.lightGreen}
          multiline={multiline}
        />
        {imageSource ? (
          touchableImage ? (
            <TouchableOpacity
              onPress={() => setSecureTextEntry?.(!secureTextEntry)}
            >
              <Image
                source={imageSource}
                style={[styles.rightImg, imageSize && imageSize]}
              />
            </TouchableOpacity>
          ) : (
            <Image
              source={imageSource}
              style={[styles.rightImg, imageSize && imageSize]}
            />
          )
        ) : null}
      </View>
      {errorMessage ? (
        <Text style={globalStyle.errorMessage}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};
