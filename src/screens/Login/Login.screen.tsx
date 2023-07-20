import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { DipCoreLogo, NriBlueLogo } from '../../assets';
import { Button, StyledText, StyledTextInput } from '../../components';
import { theme } from '../../theme';
import { styles } from './Login.styles';
import { useSelector } from 'react-redux';
import { commonLogin } from '../../utils';
import { RootState } from '../../redux';

export const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated } = useSelector((state: RootState) => state.rootReducer.loginStatus);

  const handleChangeInput = (setState: any) => (e: any) => {
    setState(e.nativeEvent.text);
  };

  const onSubmit = () => {
    commonLogin({ user: email, password }, navigation);
  };

  useEffect(() => {
    if (isAuthenticated) navigation.navigate('Home');
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={theme.colors.primary} />
      <ScrollView>
        <View style={styles.logoContainer}>
          <DipCoreLogo width={'100%'} />
        </View>

        <View style={styles.blueTopSection} />

        <View style={styles.formContainer}>
          <StyledText style={styles.label}>ユーザー名</StyledText>
          <StyledTextInput
            style={styles.input}
            placeholder="ユーザー名を入力して下さい"
            value={email}
            onChange={handleChangeInput(setEmail)}
          />
          <StyledText style={styles.label}>パスワード</StyledText>
          <StyledTextInput
            style={styles.input}
            placeholder="パスワードを入力してください"
            value={password}
            onChange={handleChangeInput(setPassword)}
          />
          <Button primary text="ログイン" style={{ marginTop: 10 }} onPress={onSubmit} />
          <Button transparent text="アカウントを作成する" style={{ marginTop: 0 }} />
        </View>
        <View style={styles.bottomlogo}>
          <NriBlueLogo />
        </View>
      </ScrollView>
    </View>
  );
};
