import React from 'react';
import { View } from 'react-native';
import { StyledText } from '../StyledText/StyledText.component';
import { GiftIcon, HourGlassIcon } from '../../../assets';
import { styles } from './ResumePackage.styles';

export const ResumePackage = () => {
  return (
    <View style={styles.container}>
      <StyledText subtitle style={{ margin: 13, lineHeight: 18 }}>
        概要情報
      </StyledText>
      <View style={styles.underline}></View>

      <View style={styles.resume}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <GiftIcon />
            <StyledText type4 style={{ marginLeft: 14, lineHeight: 18 }}>
              総配送数
            </StyledText>
          </View>
          <StyledText type1 style={{ fontSize: 18, color: '#1C3180', lineHeight: 20 }}>
            31
          </StyledText>
        </View>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <HourGlassIcon />
            <StyledText type4 style={{ marginLeft: 14, lineHeight: 18 }}>
              補足情報
            </StyledText>
          </View>
          <View style={styles.iconContainer}>
            <StyledText type1 style={{ fontSize: 18, color: '#1C3180', lineHeight: 20 }}>
              5:43
            </StyledText>
            <StyledText type2 style={{ fontSize: 14, color: '#1C3180', lineHeight: 18 }}>
              {' hs'}
            </StyledText>
          </View>
        </View>
      </View>
    </View>
  );
};
