import React from 'react';
import { Text, View, ViewProps } from 'react-native';
import { styles } from './Navbar.styles';
import { DipAndNriLogo, DipCoreLogo, NriWhiteLogo } from '../../../assets';
import { StyledText } from '../..';

interface Props extends ViewProps {}

export const Navbar: React.FC<Props> = ({ style = {}, ...props }) => {
  const navbarStyles = [style, styles.navbar];

  return (
    <View style={navbarStyles} {...props}>
      <View style={styles.logosContainer}>
        <DipCoreLogo width={74} height={17} />
        <View style={styles.rectangle} />
        <NriWhiteLogo width={74} height={17} />
      </View>
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
    </View>
  );
};
