import { Image, StyleSheet, type ImageSourcePropType } from 'react-native';

type Props = {
  placeholder: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ placeholder, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholder;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
