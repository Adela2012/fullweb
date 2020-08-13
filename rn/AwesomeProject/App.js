import * as React from 'react';
import { Text, View, StyleSheet, Button, PermissionsAndroid, Platform, Alert } from 'react-native';

export default function App() {
  const [permissionsGranted, setPermissionsGranted] = React.useState(false);
  const [result, setResult] = React.useState('');

  function checkPermissions() {
    const PERMISSIONS = [
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.CAMERA,
    ];
    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple(PERMISSIONS).then((results) => {
        const allPermissionsGranted = Object.values(results).every(
          (result) => result === 'granted',
        );
        // Alert.alert(JSON.stringify(results))
        setResult(JSON.stringify(results))
        if (allPermissionsGranted) {
          setPermissionsGranted(true);
        } else {
          // checkPermissions();
        }
      });
    } else {
      setPermissionsGranted(true);
    }
  }

  return (
    <View style={styles.container}>
      <Button title="去授权~" onPress={requestCameraPermission} />
      <Button title="去授权~" 
        color="red"
        onPress={checkPermissions}/>
      <Text style={styles.paragraph}>
        {permissionsGranted ? '已授权' :'未授权'}
      </Text>
      <Text>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});
