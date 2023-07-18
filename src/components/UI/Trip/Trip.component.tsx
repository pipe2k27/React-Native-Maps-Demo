import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckIcon, TruckIcon } from '../../../assets';
import { styles } from './Trip.styles';
import { StyledText } from '../Text/StyledText.component';
import { theme } from '../../../theme';

type Props = {
  count: number;
  openGoogleMaps: any;
};

export const Trip: React.FC<Props> = ({ count, openGoogleMaps }) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.tripWrapper}>
      {isSelected ? (
        <View>
          <View style={styles.infoWrapper}>
            <StyledText gray style={styles.text}>
              Trip
            </StyledText>
            <StyledText xl bold gray style={styles.textBig}>
              {`${count}`}
            </StyledText>
            <CheckIcon />
          </View>
          <Text style={styles.checkText}>納品済み</Text>
        </View>
      ) : (
        <View>
          <View style={styles.infoWrapper}>
            <StyledText style={styles.text}>Trip</StyledText>
            <StyledText xl bold style={styles.textBig}>
              {`${count}`}
            </StyledText>
            <TruckIcon />
          </View>
          <Text style={{ color: theme.colors.grayDark }}>伝票番号・配送先名</Text>
        </View>
      )}
      <View style={styles.infoWrapper}>
        <TouchableOpacity onPress={() => openGoogleMaps()}>
          <StyledText primary>配送開始</StyledText>
        </TouchableOpacity>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{ true: theme.colors.primary, false: theme.colors.gray }}
          style={styles.checkbox}
        />
      </View>
    </View>
  );
};
