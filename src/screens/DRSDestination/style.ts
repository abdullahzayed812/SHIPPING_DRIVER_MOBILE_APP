import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../helpers/colors';
const { width, height } = Dimensions.get('screen');
export default StyleSheet.create({
  modelView: {
    width: width * 0.8,
    height: height * 0.24,
    backgroundColor: colors.darkColor,
    marginVertical: height * 0.4,
    marginHorizontal: width * 0.1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modelTitle: {
    width: width * 0.7,
    marginBottom: height * 0.03,
    fontSize: width * 0.046,
    color: colors.mainColor,
  },
  modelTouch: {
    width: width * 0.3,
    height: height * 0.05,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainColor,
  },
  modelTExtTouch: {
    fontSize: width * 0.04,
    color: colors.white,
  },
  modelView2: {
    width: width * 0.8,
    height: height * 0.32,
    backgroundColor: colors.darkColor,
    marginVertical: height * 0.3,
    marginHorizontal: width * 0.1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modelTitle2: {
    width: width * 0.5,
    //marginBottom: height * 0.03,
    marginVertical: height * 0.03,
    fontSize: width * 0.046,
    color: colors.mainColor,
  },
  modelTouch2: {
    width: width * 0.3,
    height: height * 0.05,
    marginVertical: height * 0.03,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainColor,
  },
  modelTExtTouch2: {
    fontSize: width * 0.04,
    color: colors.white,
  },
  textItem: {
    fontSize: width * 0.04,
    color: colors.blue,
  },
});
