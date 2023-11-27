import React, { useLayoutEffect, useState } from 'react';
import { Alert, Modal, Text, TouchableOpacity, View } from 'react-native';
import { InputField } from '../../components/Common/InputField';
import { CustomButton } from '../../components/Common/CustomButton';
import { styles } from './style';
import { getNotPickupSubStatus } from '../../redux/DRS/notPickupSubStatusSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Loading } from '../../components/Loading';
import { updateShipment } from '../../redux/shipments/shipmentUpdateSlice';
import { ShipmentUpdateType } from '../ShipmentDetails';
import { loadUserData } from '../../helpers/asyncStorage';
import { RouteProp } from '@react-navigation/native';
import { OrdersStackParamList } from '../../navigation/types';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import i18n from '../../helpers/language';

interface Props {
  route: RouteProp<OrdersStackParamList, 'NotPickup'>;
}

export const NotPickup: React.FC<Props> = ({ route }) => {
  const [showSubStatusModal, setShowSubStatusModal] = useState<boolean>(false);
  const [chooseSubStatus, setChooseSubStatus] = useState<string>('');
  const [subStatusId, setSubStatusId] = useState<number | undefined>(undefined);
  const [comment, setComment] = useState<string>('');

  const { drsId, shipmentId } = route.params;

  const dispatch = useAppDispatch();

  const { notPickupSubStatus, loading } = useAppSelector(
    state => state.notPickupSubStatus,
  );

  const handleSelect = (title: string, id: number): void => {
    setShowSubStatusModal(false);
    setChooseSubStatus(title);
    setSubStatusId(id);
  };

  const submit = async () => {
    if (!chooseSubStatus) {
      Toast.show({
        type: 'error',
        text1: i18n.t('subStatusError').toString(),
        text2: i18n.t('subStatusErrorMessage').toString(),
      });
      return;
    }

    const { id: userId } = await loadUserData();

    const shipmentUpdateData: ShipmentUpdateType = {
      driver_id: userId,
      drs_id: drsId,
      shipment_id: shipmentId,
      status: 33,
      substatus_id: subStatusId,
      comment,
      m_receiver_name: '',
      receiver_id: '',
    };
    // await updateShipment(dispatch, shipmentUpdateData);
  };

  const loadNotPickupSubStatus = async () => {
    await getNotPickupSubStatus(dispatch, 0, {
      id: 33,
    });
  };

  useLayoutEffect(() => {
    loadNotPickupSubStatus();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.subStatusBox}
        onPress={() => setShowSubStatusModal(true)}
      >
        <Text style={styles.modalText}>
          {chooseSubStatus ? chooseSubStatus : 'Choose substatus'}
        </Text>
      </TouchableOpacity>
      <InputField
        placeholder="Add Comment"
        inputContainerStyle={styles.inputContainerStyle}
        multiline
        value={comment}
        setValue={setComment}
      />
      <CustomButton
        title="SUBMIT"
        buttonStyle={styles.buttonStyle}
        onPress={submit}
      />
      <Modal visible={showSubStatusModal} transparent animationType="slide">
        <TouchableOpacity
          style={styles.modal}
          onPress={() => setShowSubStatusModal(false)}
        >
          <View style={styles.modalBox}>
            {notPickupSubStatus.map(
              ({ title, id }: { title: string; id: number }, index, array) => (
                <TouchableOpacity
                  key={id}
                  onPress={() => handleSelect(title, id)}
                >
                  <Text style={styles.modalText}>{title}</Text>
                  {index !== array.length - 1 ? (
                    <View style={styles.underline} />
                  ) : null}
                </TouchableOpacity>
              ),
            )}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
