import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import MapView, {
  enableLatestRenderer,
  LatLng,
  Marker,
  Polyline,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';
// import { GOOGLE_MAPS_KEY } from '@env';
import mockPackages from '../../components/packages.json';
import { pin01 } from '../../assets';
import { getStyles } from './Map.styles';

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
          tmpRoutes.push(...polylines);
        }
        tmpRoutes.push({ latitude: pkg.lat, longitude: pkg.lng });
        tmpPackages.push({ latitude: pkg.lat, longitude: pkg.lng });
      });
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
          {/* <MapViewDirections
          apikey={GOOGLE_MAPS_KEY}
          origin={packages[0]}
          destination={packages[packages.length - 1]}
          waypoints={packages}
          strokeColor="red"
          strokeWidth={4}
        /> */}
          <Polyline
            coordinates={route}
            strokeColor="darkblue"
            strokeWidth={4}
            // these two following are for dashed lines only
            // lineDashPattern={[20, 10]}
            // lineCap={'square'}
          />
          {packages?.map((pkg, pkgIndex) => (
            <Marker key={pkgIndex} coordinate={pkg} image={pin01} />
          ))}
        </MapView>
        <Text>{JSON.stringify(map, null, 2)}</Text>
      </View>
    </ScrollView>
  );
};
