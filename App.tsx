import { StyleSheet, Text, View, StatusBar } from 'react-native';
import CameraScreen from './src/Camera';
import GeolocationScreen from './src/Geolocation';
import NotificationScreen from './src/LocalPushNotification';

export default function App() {
  return (
    <View style={styles.container}>
      <CameraScreen></CameraScreen>
      {/* <GeolocationScreen></GeolocationScreen>
      <NotificationScreen></NotificationScreen> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
