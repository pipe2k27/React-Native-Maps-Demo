import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import packeges from '../../components/packages.json';

const Home = () => {
  const [allDestinations, setAllDestinations] = useState<any>([]);

  const openGoogleMaps = async (destinations: any) => {
    const destination = `${destinations[destinations.length - 1].lat}%2C${
      destinations[destinations.length - 1].lng
    }`;
    const baseUrl = `https://www.google.com/maps/dir/?api=1&origin=&destination=${destination}&travelmode=driving`;
    const waypoints = destinations.map((element: any) => {
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
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    flexGrow: 1,
  },
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
