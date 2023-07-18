import React from 'react';
import { View } from 'react-native';
import { StyledText } from '../../UI/Text/StyledText.component';
import { GiftIcon, HourGlassIcon } from '../../../assets';
import { styles } from './ResumePackage.styles';

export const ResumePackage = () => {
  return (
    <View style={styles.container}>
      <StyledText primary lg bold style={styles.title}>
        概要情報
      </StyledText>
      <View style={styles.underline}></View>

      <View style={styles.resume}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <GiftIcon />
            <StyledText sm style={styles.subtitle}>
              総配送数
            </StyledText>
          </View>
          <StyledText grayDark lg style={styles.data}>
            31
          </StyledText>
        </View>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <HourGlassIcon />
            <StyledText sm style={styles.subtitle}>
              補足情報
            </StyledText>
          </View>
          <View style={styles.iconContainer}>
            <StyledText grayDark lg style={styles.data}>
              5:43
            </StyledText>
            <StyledText grayDark style={styles.hour}>
              {' hs'}
            </StyledText>
          </View>
        </View>
      </View>
    </View>
  );
};
