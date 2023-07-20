import React, { useRef, useState } from 'react';
import { View, Linking, ScrollView, StatusBar } from 'react-native';
import { ResumePackage, StyledText, StyledTextInput, Trip } from '../../components';
import packages from '../../components/packages.json';
import { theme } from '../../theme';
import { SearchIcon } from '../../assets';
import { styles } from './Home.styles';
import { styles as ResumePackageStyles } from '../../components/UI/ResumePackage/ResumePackage.styles';
import { TripType } from '../../types/Trip';

export const Home: React.FC = () => {
  const [tripList, setTripList] = useState<TripType[]>(packages);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const scrollViewRef = useRef<ScrollView>(null);
  const inputRef = useRef<any>(null);

  const openGoogleMaps = async (lat: number, lng: number) => {
    const destination = `${lat}%2C${lng}`;
    const baseUrl = `https://www.google.com/maps/dir/?api=1&origin=&destination=${destination}&travelmode=driving`;
    await Linking.openURL(baseUrl);
  };

  const handleInputChange = (inputValue: string) => {
    const searchTerm = inputValue.toLowerCase().trim();

    if (searchTerm === '') return setTripList(packages);

    const filteredTripList = packages.filter((item) =>
      item.node_name.toLowerCase().includes(searchTerm)
    );
    setTripList(filteredTripList);
  };

  const scrollToChild = () => {
    inputRef.current.measureLayout(
      scrollViewRef.current,
      (x: number, y: number) => {
        scrollViewRef.current?.scrollTo({ x: 0, y: y });
      },
      () => {}
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.primary} />
      <ScrollView
        contentContainerStyle={[styles.scroll, isFocused ? styles.extraPadding : null]}
        stickyHeaderIndices={[3]}
        ref={scrollViewRef}
      >
        <ResumePackage />

        <StyledText primary bold style={ResumePackageStyles.title}>
          Google Mapsで配送を開始
        </StyledText>
        <View style={ResumePackageStyles.underline}></View>

        <View style={styles.sticky}>
          <StyledTextInput
            ref={inputRef}
            placeholder="配送先絞り込み"
            rightIcon={<SearchIcon />}
            onChangeText={handleInputChange}
            onPressIn={scrollToChild}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
        <View style={styles.list}>
          {tripList.length ? (
            tripList.map((trip: TripType, index: number) => {
              return <Trip key={index} openGoogleMaps={openGoogleMaps} trip={trip} />;
            })
          ) : (
            <View style={{ alignSelf: 'center' }}>
              <StyledText lg bold>
                No results
              </StyledText>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
