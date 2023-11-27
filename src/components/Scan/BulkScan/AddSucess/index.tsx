import React, { Dispatch, SetStateAction } from 'react';
import { Text, View } from 'react-native';
import { CustomButton } from '../../../Common/CustomButton';
import { styles } from './style';

interface Props {
  setTryAddAgain: Dispatch<SetStateAction<boolean>>;
  setSignature: Dispatch<SetStateAction<string>>;
}

export const AddSuccess: React.FC<Props> = ({
  setTryAddAgain,
  setSignature,
}) => {
  return (
    <View style={styles.successAllContainer}>
      <Text style={styles.successAllTitle}>123 SuccessAddAll</Text>
      <CustomButton
        title={'Add More'}
        onPress={() => {
          // this.setState({ viewInput: true, signatureImage: '' })
          setTryAddAgain(true);
          setSignature('');
        }}
        buttonStyle={styles.buttonContainer}
        titleStyle={styles.buttonText}
      />
    </View>
  );
};
