import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { DipCoreLogo, NriBlueLogo } from '../../assets';
import { Button, StyledText, StyledTextInput } from '../../components';
import { theme } from '../../theme';
import { styles } from './Login.styles';
import { useNavigation } from '@react-navigation/native';

export const Login = ({ navigation }: any) => (
  <View style={{ flex: 1 }}>
    <StatusBar backgroundColor={theme.colors.primary} />
    <ScrollView>
      <View style={styles.logoContainer}>
        <DipCoreLogo width={'100%'} />
      </View>

      <View style={styles.blueTopSection} />

      <View style={styles.formContainer}>
        <StyledText style={styles.label}>ユーザー名</StyledText>
        <StyledTextInput style={styles.input} placeholder="ユーザー名を入力して下さい" />
        <StyledText style={styles.label}>パスワード</StyledText>
        <StyledTextInput
          style={styles.input}
          placeholder="パスワードを入力してください"
          secureTextEntry
        />
        <Button
          primary
          text="ログイン"
          style={{ marginTop: 10 }}
          onPress={() => navigation.navigate('Home', {})}
        />
        <Button transparent text="アカウントを作成する" style={{ marginTop: 0 }} />
      </View>
      <View style={styles.bottomlogo}>
        <NriBlueLogo />
      </View>
    </ScrollView>
  </View>
);
