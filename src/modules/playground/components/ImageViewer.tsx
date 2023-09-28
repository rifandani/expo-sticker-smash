import { Image, StyleSheet, type ImageSourcePropType } from 'react-native';

type Props = {
  source: ImageSourcePropType;
};

export default function ImageViewer({ source }: Props) {
  return <Image source={source} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
