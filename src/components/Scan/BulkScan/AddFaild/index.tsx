import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useAppSelector } from '../../../../redux/hooks';
import { styles } from './style';

export const AddFaild: React.FC = () => {
  const { countShipmentSuccess } = useAppSelector(
    state => state.pickupShipmentScan,
  );

  return (
    <View style={styles.successContainer}>
      <Text style={styles.successTitle}>ScanedShipments</Text>
      <Text style={styles.successAllTitle}>{countShipmentSuccess.length}</Text>
      <Text style={styles.notAddMessageText}>123 FailedAdd</Text>
      <FlatList
        data={[1, 2, 3]}
        // keyExtractor={this._keyExtractor}
        renderItem={() => (
          <View style={styles.successItemView}>
            <Text style={styles.successItemText}>awb: 123piopiwuerasddf</Text>
            <Text style={styles.successItemError}>error</Text>
          </View>
        )}
        // ListFooterComponent={this._renderFooterSuccess}
        // onRefresh={this._onRefresh}
        // refreshing={this.props.refreshing}
        // contentContainerStyle={styles.flatList}
        // extraData={this.props.loading}
      />
    </View>
  );
};
