import React, { Dispatch, SetStateAction } from 'react';
import { Modal, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { colors } from '../../../../helpers/colors';
import { CustomButton } from '../../../Common/CustomButton';
import { styles } from './style';

interface Props {
  showCalender: boolean;
  handleDateChange: (date: any) => void;
  handleCancel: () => void;
  setShowCalender: Dispatch<SetStateAction<boolean>>;
}

export const CalenderModal: React.FC<Props> = ({
  showCalender,
  handleCancel,
  handleDateChange,
  setShowCalender,
}) => {
  return (
    <Modal visible={showCalender} transparent>
      <View style={styles.calenderWrapper}>
        <CalendarPicker
          onDateChange={date => handleDateChange(date)}
          selectedDayColor={colors.mainColor}
          selectedDayTextColor={colors.white}
        />
        <View style={styles.calenderBtnBox}>
          <CustomButton
            title="Ok"
            buttonStyle={styles.calenderBtn}
            onPress={() => setShowCalender(false)}
          />
          <CustomButton
            title="Cancel"
            buttonStyle={styles.calenderBtn}
            onPress={handleCancel}
          />
        </View>
      </View>
    </Modal>
  );
};
