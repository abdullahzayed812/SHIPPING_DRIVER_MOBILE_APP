import React, { Dispatch, SetStateAction } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface Props {
  text: string;
  lastElement?: boolean;
  changeStatusAndSelectReason?: (
    reason: string,
    shipmentReasonId: number | undefined,
  ) => void;
  color: { color: string };
  setReasonIndex?: Dispatch<SetStateAction<number | undefined>>;
  index: number;
  shipmentReasonId?: number | undefined;
}

export const ShipmentDetailsModalRow: React.FC<Props> = ({
  text,
  lastElement,
  changeStatusAndSelectReason,
  color,
  setReasonIndex,
  index,
  shipmentReasonId,
}) => {
  const handlePress = (
    text: string,
    shipmentReasonId: number | undefined,
    index: number,
  ) => {
    changeStatusAndSelectReason?.(text, shipmentReasonId);
    setReasonIndex?.(index);
  };
  return (
    <TouchableOpacity
      onPress={() => handlePress(text, shipmentReasonId, index)}
      style={[styles.textBox, lastElement && { borderBottomWidth: 0 }]}
    >
      <Text style={[styles.text, color]}>{text}</Text>
    </TouchableOpacity>
  );
};
