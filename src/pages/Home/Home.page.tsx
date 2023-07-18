import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
import { ResumePackage, StyledText } from '../../components';
import packeges from '../../components/packages.json';
import { theme } from '../../theme';

type Waypoint = {
  lat: number;
  lng: number;
};

const Home = () => {
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
      <View style={{ height: 200, width: '100%', backgroundColor: 'darkblue' }}>
        <Text style={styles.text}>header</Text>
      </View>
      <ScrollView style={{ ...styles.scroll, height: height - 260 }} stickyHeaderIndices={[1]}>
        <ResumePackage />
        <View style={styles.sticky}>
          <StyledText>Search</StyledText>
          <TextInput style={styles.input} placeholder="Search" />
        </View>
        <View style={styles.list}>
          {allDestinations.map((destinations: any, index: number) => (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => openGoogleMaps(destinations)}
              key={index}
            >
              <Text style={styles.text}>Open {index + 1} Route</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
  scroll: {
    backgroundColor: theme.colors.white,
    width: '100%',
    overflow: 'scroll',
  },
  sticky: {
    backgroundColor: theme.colors.white,
    padding: 20,
  },
  input: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
  },
  list: { padding: 20 },
  btn: {
    backgroundColor: '#457b9d',
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
  },
  text: {
    color: '#fff',
  },
});

export default Home;
