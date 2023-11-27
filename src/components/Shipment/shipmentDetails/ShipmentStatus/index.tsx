import React from 'react';
import { View } from 'react-native';
import { IMAGES } from '../../../../helpers/images';
import i18n from '../../../../helpers/language';
import { globalStyle } from '../../../../utils/globalStyles/globalStyles';
import { CustomButton } from '../../../Common/CustomButton';
import { ShipmentDetailsRow } from '../ShipmentDetailsRow';
import { styles } from './style';

interface Props {
  buttonTitle: string;
  toggleShowModal: () => void;
}

export const ShipmentStatus: React.FC<Props> = ({
  buttonTitle,
  toggleShowModal,
}) => {
  return (
    <View style={globalStyle.shipmentDetailsBox}>
      <ShipmentDetailsRow
        imageSource={IMAGES.rightYArrow}
        text={i18n.t('status').toString()}
        bigText
        textColor={styles.textColor}
      />
      <View style={styles.line} />
      <View style={styles.halfRow}>
        <ShipmentDetailsRow
          imageSource={IMAGES.selectStatus}
          text={i18n.t('selectStatus').toString()}
        />
        <CustomButton
          title={buttonTitle === '' ? 'Choose Status' : buttonTitle}
          outline
          outlineStyle={
            buttonTitle === ''
              ? styles.defaultoutline
              : buttonTitle === i18n.t('delivered')
              ? styles.borderColorGreen
              : styles.borderColorRed
          }
          buttonStyle={styles.buttonStyle}
          titleStyle={[
            styles.buttonTitleStyle,
            buttonTitle === ''
              ? styles.buttonTitleStyle
              : buttonTitle === i18n.t('delivered')
              ? styles.titleColorGreen
              : styles.titleColorRed,
          ]}
          imageSource={
            buttonTitle === ''
              ? IMAGES.rightYArrow
              : buttonTitle === i18n.t('delivered')
              ? IMAGES.rightGArrow
              : IMAGES.rightRArrow
          }
          onPress={toggleShowModal}
        />
      </View>
    </View>
  );
};
