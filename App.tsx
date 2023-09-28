import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import PlaceholderImage from '#assets/images/background-image.png';
import Button from '#playground/components/Button';
import ImageViewer from '#playground/components/ImageViewer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.imageContainer}>
        <ImageViewer source={PlaceholderImage} />
      </View>

      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
