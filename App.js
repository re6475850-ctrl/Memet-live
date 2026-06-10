import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // परमिशन अभी चेक हो रही है
    return <View />;
  }

  if (!permission.granted) {
    // परमिशन नहीं मिली है
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>कैमरा और माइक्रोफोन के लिए परमिशन चाहिए</Text>
        <Button onPress={requestPermission} title="परमिशन दें" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing="back" mode="video">
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>स्ट्रीमिंग लाइव है...</Text>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  camera: { flex: 1 },
  buttonContainer: { flex: 1, backgroundColor: 'transparent', flexDirection: 'row', margin: 20 },
  text: { fontSize: 18, color: 'white', fontWeight: 'bold' }
});
    
