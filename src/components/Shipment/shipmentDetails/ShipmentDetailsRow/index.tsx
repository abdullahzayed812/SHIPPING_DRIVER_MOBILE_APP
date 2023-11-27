import React from 'react';
import { View, Text, Image, TextStyle, ImageStyle } from 'react-native';
import { styles } from './style';

interface Props {
  imageSource: any;
  text?: string;
  extremeText?: string;
  bigText?: boolean;
  textColor?: TextStyle;
  extremeTextColor?: TextStyle;
  imageStyle?: ImageStyle;
}

export const ShipmentDetailsRow: React.FC<Props> = ({
  imageSource,
  text,
  extremeText,
  bigText,
  textColor,
  extremeTextColor,
  imageStyle,
}) => {
  return (
    <View style={styles.textBox}>
      <Image source={imageSource} style={[styles.img, imageStyle]} />
      {text ? (
        <Text style={[bigText ? styles.text : styles.normalText, textColor]}>
          {text}
        </Text>
      ) : null}
      {extremeText ? (
        <Text style={[styles.extremeText, extremeTextColor]}>
          {extremeText}
        </Text>
      ) : null}
    </View>
  );
};
