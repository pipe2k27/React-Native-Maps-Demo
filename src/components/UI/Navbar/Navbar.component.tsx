import React, { useEffect, useState } from 'react';
import { Button, Text, TouchableOpacity, View, ViewProps } from 'react-native';
import { styles } from './Navbar.styles';
import { DatePickerIcon, DipAndNriLogo, DipCoreLogo, NriWhiteLogo } from '../../../assets';
import { StyledText } from '../..';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props extends ViewProps {}

export const Navbar: React.FC<Props> = ({ style = {}, ...props }) => {
  const navbarStyles = [style, styles.navbar];
  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  useEffect(() => {
    console.log(date.toLocaleString());
  }, [date]);

  return (
    <View style={navbarStyles} {...props}>
      <View style={styles.logosContainer}>
        <DipCoreLogo width={74} height={17} />
        <View style={styles.rectangle} />
        <NriWhiteLogo width={74} height={17} />
      </View>

      <View style={styles.navbarContainer}>
        <View style={styles.navbarTextContainer}>
          <StyledText type4 style={styles.textColorGrey}>
            ドライバー
          </StyledText>
          <StyledText type1 style={styles.navTextSubTitle}>
            野村 太郎様
          </StyledText>
          <StyledText
            type1
            style={[styles.navTextSubTitle, styles.textColorGrey, { paddingTop: 24 }]}
          >
            配送日選択
          </StyledText>
          <StyledText type2 style={styles.navTextTitle}>
            3月22日火曜日
          </StyledText>
        </View>

        <TouchableOpacity onPress={showDatepicker} style={styles.dateTimePicker}>
          <DatePickerIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};
