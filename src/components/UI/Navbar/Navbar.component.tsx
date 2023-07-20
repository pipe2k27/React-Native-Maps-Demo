import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { TouchableOpacity, View, ViewProps } from 'react-native';
import { styles } from './Navbar.styles';
import { DatePickerIcon, DipCoreLogo, NriWhiteLogo } from '../../../assets';
import { StyledText } from '../..';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { setDateSelected } from '../../../redux/date';

interface Props extends ViewProps {}

export const Navbar: React.FC<Props> = ({ style = {}, ...props }) => {
  const navbarStyles = [style, styles.navbar];
  const [date, setDate] = useState(new Date());

  const dispatch = useAppDispatch();
  const { dateSelected } = useAppSelector((state) => state.dateSlice);

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

  const fomatDateInJapanese = (date: Date) => {
    const formattedDate = format(date, 'M月dd日eeee', { locale: ja });
    dispatch(setDateSelected(formattedDate));
  };

  useEffect(() => {
    fomatDateInJapanese(date);
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
          <StyledText sm style={styles.textColorGrey}>
            ドライバー
          </StyledText>
          <StyledText sm bold style={styles.navTextSubTitle}>
            野村 太郎様
          </StyledText>
          <StyledText
            sm
            bold
            style={[styles.navTextSubTitle, styles.textColorGrey, { paddingTop: 18 }]}
          >
            配送日選択
          </StyledText>
          <StyledText sm style={styles.navTextTitle}>
            {dateSelected}
          </StyledText>
        </View>

        <TouchableOpacity onPress={showDatepicker} style={styles.dateTimePicker}>
          <DatePickerIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};
