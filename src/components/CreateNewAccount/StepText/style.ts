import { StyleSheet } from 'react-native';
import { globalStyle } from '../../../utils/globalStyles/globalStyles';

export const styles = StyleSheet.create({
  stepText: {
    ...globalStyle.stepText,
    ...globalStyle.normalText,
  },
  number: globalStyle.number,
});
