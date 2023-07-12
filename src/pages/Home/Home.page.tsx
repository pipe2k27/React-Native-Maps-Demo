import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import packeges from '../../components/packages.json';

const Home = () => {
  const [destinations, setDestinations] = useState<any>([]);

  const openGoogleMaps = async () => {
    const baseUrl = `https://www.google.com/maps/dir/?api=1&origin=35.57896905267314%2C139.63607738404906&destination=`;
    const nextURl = `${destinations[0].lat}%2C${destinations[0].lng}&travelmode=driving`;
    const waypoints = destinations.map((element: any) => {
      return `${element.lat}%2C${element.lng}`;
    });
    waypoints.shift();
    waypoints.pop();
    await Linking.openURL(`${baseUrl}${nextURl}&waypoints=${waypoints.join('%7C')}`);
  };

  useEffect(() => {
    const newDestinationsArray: any = [];
    packeges.map((eachPackage) => {
      newDestinationsArray.push({ lat: eachPackage.lat, lng: eachPackage.lng });
    });
    setDestinations(newDestinationsArray);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={openGoogleMaps}>
        <Text style={styles.text}>Open Google Maps</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  btn: {
    backgroundColor: '#457b9d',
    padding: 16,
    borderRadius: 12,
  },
  text: {
    color: '#fff',
  },
});

export default Home;
