import React from 'react';
import {
  Image,
  ImageStyle,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { styles } from './style';

interface Props {
  title?: string | undefined;
  onPress?: () => void;
  outline?: boolean;
  outlineStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle[] | TextStyle;
  imageSource?: any;
  scanSourceImg?: any;
  sortByLocation?: boolean;
  scanImageStyle?: ImageStyle;
}

export const CustomButton: React.FC<Props> = React.memo(
  ({
    title,
    onPress,
    outline,
    buttonStyle,
    titleStyle,
    outlineStyle,
    imageSource,
    scanSourceImg,
    sortByLocation,
    scanImageStyle,
  }) => {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          buttonStyle,
          outline && {
            ...styles.outline,
            borderColor: outlineStyle
              ? outlineStyle.borderColor
              : styles.outline.borderColor,
          },
          imageSource && styles.withImg,
        ]}
        onPress={onPress}
      >
        {scanSourceImg ? (
          <Image
            source={scanSourceImg}
            style={[styles.img, styles.scanImg, scanImageStyle]}
          />
        ) : null}
        <Text
          style={[
            styles.title,
            outline && {
              ...styles.outlineColor,
              color: outlineStyle
                ? outlineStyle.color
                : styles.outlineColor.color,
            },
            titleStyle,
          ]}
        >
          {title}
        </Text>
        {imageSource ? (
          <Image
            source={imageSource}
            style={[styles.img, sortByLocation && styles.sortByLocationImg]}
          />
        ) : null}
      </TouchableOpacity>
    );
  },
);
