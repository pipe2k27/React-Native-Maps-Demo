import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAppError } from './setAppError';

const getAllCheckedTrips = async () => {
  try {
    const JSONcheckedTrips = await AsyncStorage.getItem('checkedTrips');
    if (JSONcheckedTrips) {
      return JSON.parse(JSONcheckedTrips);
    }

    return '';
  } catch (error: any) {
    setAppError(error?.code, error?.message);
  }
};

export const existsTrip = async (tripID: string) => {
  try {
    const allTrips: string[] = await getAllCheckedTrips();
    const found = allTrips.find((trip) => trip === tripID);
    return found !== undefined;
  } catch (error: any) {
    setAppError(error?.code, error?.message);
  }
};

export const checkedTrip = async (tripID: string) => {
  try {
    const allTrips: string[] = await getAllCheckedTrips();
    const newTrips = [...allTrips, tripID];
    AsyncStorage.setItem('checkedTrips', JSON.stringify(newTrips));
  } catch (error: any) {
    setAppError(error?.code, error?.message);
  }
};

export const uncheckedTrip = async (tripID: string) => {
  try {
    const allTrips: string[] = await getAllCheckedTrips();
    const newTrips = allTrips.filter((trip) => trip !== tripID);
    AsyncStorage.setItem('checkedTrips', JSON.stringify(newTrips));
  } catch (error: any) {
    setAppError(error?.code, error?.message);
  }
};
