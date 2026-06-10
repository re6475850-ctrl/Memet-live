
    
    import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', color: 'white' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing="back" mode="video">
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>Streaming Live...</Text>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center',
    backgroundColor: '#000' 
  },
  camera: { 
    flex: 1 
  },
  buttonContainer: { 
    flex: 1, 
    backgroundColor: 'transparent', 
    margin: 20,
    justifyContent: 'flex-end'
  },
  text: { 
    fontSize: 20, 
    color: 'white', 
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
