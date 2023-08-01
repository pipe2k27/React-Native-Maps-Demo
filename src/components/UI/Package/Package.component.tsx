import React, { useState, useEffect } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckIcon, TruckIcon } from '../../../assets';
import { styles } from './Package.styles';
import { StyledText } from '../Text/StyledText.component';
import { theme } from '../../../theme';
import { TripType } from '../../../types/Trip';
import { checkedTrip, existsTrip, uncheckedTrip } from '../../../utils/commonTrips';
import Walk from '../../../assets/base/Walk';

type Props = {
  trip: TripType;
  openGoogleMaps: (lat: number, lng: number) => Promise<void>;
  number: number;
};

export const Package: React.FC<Props> = ({ trip, openGoogleMaps, number }) => {
  const [isSelected, setSelection] = useState<boolean>(false);

  // useEffect(() => {
  //   if (isSelected) {
  //     checkedTrip(trip.node_id);
  //   } else {
  //     uncheckedTrip(trip.node_id);
  //   }
  // }, [isSelected]);

  const checkIfTripIsChecked = async () => {
    const exist = await existsTrip(trip.node_id);

    if (exist) {
      setSelection(true);
    }
  };

  // useEffect(() => {
  //   checkIfTripIsChecked();
  // }, []);

  return (
    <View style={styles.tripWrapper}>
      {isSelected ? (
        <View>
          <View style={styles.infoWrapper}>
            <StyledText gray style={styles.text}>
              Package
            </StyledText>
            <StyledText xl bold gray style={styles.textBig}>
              {/* {`${Number(trip.delivery_order) + 1}`} */}
              {String(number)}
            </StyledText>
            <CheckIcon />
          </View>
          <Text style={styles.checkText}>納品済み</Text>
        </View>
      ) : (
        <View>
          <View style={styles.infoWrapper}>
            <StyledText style={styles.text} primary>
              Package
            </StyledText>
            <StyledText primary xl bold style={styles.textBig}>
              {/* {`${Number(trip.delivery_order) + 1}`} */}
              {String(number)}
            </StyledText>
            <Walk style={styles.walk} />
          </View>
          <Text style={{ color: theme.colors.grayDark }}>伝票番号・配送先名</Text>
        </View>
      )}
      <View style={styles.infoWrapper}>
        <TouchableOpacity onPress={() => openGoogleMaps(trip.lat, trip.lng)}>
          <StyledText primary>配送開始</StyledText>
        </TouchableOpacity>
        <CheckBox
          style={styles.checkbox}
          value={isSelected}
          tintColors={{ true: theme.colors.primary, false: theme.colors.gray }}
          onValueChange={setSelection}
        />
      </View>
    </View>
  );
};
