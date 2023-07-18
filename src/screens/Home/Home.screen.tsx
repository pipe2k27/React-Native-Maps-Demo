import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import { ResumePackage, StyledText, StyledTextInput, Trip } from '../../components';
import packeges from '../../components/packages.json';
import { theme } from '../../theme';
import { SearchIcon } from '../../assets';
import { styles } from './Home.styles';
import { styles as ResumePackageStyles } from '../../components/UI/ResumePackage/ResumePackage.styles';

type Waypoint = {
  lat: number;
  lng: number;
};

export const Home = () => {
  const [allDestinations, setAllDestinations] = useState<Waypoint[]>([]);
  const { height, width } = Dimensions.get('window');
  const openGoogleMaps = async (destinations: Waypoint[]) => {
    const destination = `${destinations[destinations.length - 1].lat}%2C${
      destinations[destinations.length - 1].lng
    }`;
    const baseUrl = `https://www.google.com/maps/dir/?api=1&origin=&destination=${destination}&travelmode=driving`;
    const waypoints = destinations.map((element) => {
      return `${element.lat}%2C${element.lng}`;
    });
    waypoints.pop();
    await Linking.openURL(`${baseUrl}&waypoints=${waypoints.join('%7C')}`);
  };

  useEffect(() => {
    const newDestinationsArray = packeges.reduce((result: any, object, index) => {
      const chunkIndex = Math.floor(index / 10);
      if (!result[chunkIndex]) {
        result[chunkIndex] = [];
      }
      result[chunkIndex].push({ lat: object.lat, lng: object.lng });

      return result;
    }, []);

    setAllDestinations(newDestinationsArray);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.primary} />
      <ScrollView contentContainerStyle={styles.scroll} stickyHeaderIndices={[3]}>
        <ResumePackage />
        <StyledText primary lg bold style={ResumePackageStyles.title}>
          Google Mapsで配送を開始
        </StyledText>
        <View style={ResumePackageStyles.underline}></View>

        <View style={styles.sticky}>
          <StyledTextInput placeholder="配送先絞り込み" rightIcon={<SearchIcon />} />
        </View>
        <View style={styles.list}>
          {allDestinations.map((destinations: any, index: number) => (
            <Trip
              key={index}
              count={index + 1}
              openGoogleMaps={() => openGoogleMaps(destinations)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
