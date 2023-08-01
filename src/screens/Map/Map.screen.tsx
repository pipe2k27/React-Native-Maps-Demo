import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import MapView, {
  enableLatestRenderer,
  LatLng,
  Marker,
  Polyline,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import mockPackages from '../../components/packages.json';
import { getStyles } from './Map.styles';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_KEY } from '@env';

const initRegion = {
  latitude: 35.664522250653064,
  longitude: 139.74311376233032,
  latitudeDelta: 0.0422,
  longitudeDelta: 0.0321,
};

export const MapPreview: React.FC = ({ navigation }: any) => {
  const styles = getStyles();
  const mapRef = useRef(null);
  const [route, setRoute] = useState<LatLng[]>([]);
  const [packages, setPackages] = useState<LatLng[]>([]);
  const [region, setRegion] = useState(initRegion);
  const [map, setMap] = useState();

  enableLatestRenderer();

  useEffect(() => {
    if (mockPackages.length) {
      const tmpRoutes: LatLng[] = [];
      const tmpPackages: LatLng[] = [];
      mockPackages.map((pkg) => {
        if (pkg.route_polyline.length) {
          const polylines: LatLng[] = pkg.route_polyline.map((pol) => ({
            latitude: pol.lat,
            longitude: pol.lng,
          }));
          // console.log(`polylines ${pkg.node_id}`, polylines);
          tmpRoutes.push(...polylines);
        }
        tmpRoutes.push({ latitude: pkg.lat, longitude: pkg.lng });
        tmpPackages.push({ latitude: pkg.lat, longitude: pkg.lng });
      });
      // console.log(`tmpRoutes`, tmpRoutes);
      setRoute(tmpRoutes);
      setPackages(tmpPackages);
      setRegion({ ...initRegion, ...tmpPackages[0] });
    }
  }, [mockPackages]);

  const handleDrag = (map: any) => {
    // setMap(map);
    // console.log('map');
    // console.log(map);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={initRegion}
          region={region}
          onPanDrag={(map: any) => handleDrag(map)}
        >
          <Polyline coordinates={route} strokeColor="red" strokeWidth={4} />
          {packages?.map((pkg, pkgIndex) => (
            <Marker key={pkgIndex} coordinate={pkg} />
          ))}
          {/* <MapViewDirections
            apikey={GOOGLE_MAPS_KEY}
            origin={packages[0]}
            destination={packages[1]}
          /> */}
        </MapView>
        <Text>{JSON.stringify(map, null, 2)}</Text>
      </View>
    </ScrollView>
  );
};
